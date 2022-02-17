using System.Collections.Generic;
using System.Threading.Tasks;
using API.Data;
using API.Interfaces;
using API.Models;
using API.Models.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Text;
using System.Security.Cryptography;

namespace API.Services
{
    public class UserService
    {
        private readonly DataContext _context;
        private readonly ITokenService _tokenService;

        public UserService(DataContext context, ITokenService tokenService) {
            _context = context;
            _tokenService = tokenService;
        }

        public async Task<ActionResult<IEnumerable<UserModel>>> GetAllUsers() {
            return await _context.Users.ToListAsync();
        }

        public ActionResult<UserModel> GetOneUser(int id)
        {
            return _context.Users.Find(id);
        }

        public UserModel FindUserByUsername(string username) {
            var user =  _context.Users.SingleOrDefault(x => x.UserName == username.ToLower());
            return user;
        }

        public bool VerifyPassword(UserModel user, LoginDTO loginUser) {
            using var hmac = new HMACSHA512(user.PasswordSalt);
            var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginUser.Password));
            for (int i = 0; i < computedHash.Length; i++)
            {
                if (computedHash[i] != user.PasswordHash[i]) return false;
            }
            return true;
        }

        public UserDTO GenerateUserToken(UserModel user) {
            return new UserDTO
            {
                UserName = user.UserName,
                Token = _tokenService.CreateToken(user)
            };
        }


        public async Task<ActionResult<UserDTO>> RegisterUser(RegisterDTO registerUser)
        {
            using var hmac = new HMACSHA512();
            var user = new UserModel
            {
                UserName = registerUser.UserName.ToLower(),
                FirstName = registerUser.FirstName,
                LastName = registerUser.LastName,
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerUser.Password)),
                PasswordSalt = hmac.Key
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return GenerateUserToken(user);
        }

        public async Task<bool> UserExists(string username)
        {
            return await _context.Users.AnyAsync(x => x.UserName == username.ToLower());
        }
    }
}