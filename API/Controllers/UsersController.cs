using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using API.Data;
using API.Interfaces;
using API.Models;
using API.Models.DTOs;
using API.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class UsersController : BaseApiController
    {
        private readonly UserService _userService;
        public UsersController(UserService userService)
        {
            _userService = userService;
        }

        // /api/users => get a list of all users
        [AllowAnonymous]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserModel>>> GetUsers()
        {
            return await _userService.GetAllUsers();
        }

        // /api/users/{id} => get a user by ID
        [Authorize]
        [HttpGet("{id}")]
        public ActionResult<UserModel> GetUser(int id)
        {
            return _userService.GetOneUser(id);
        }

        // /api/users/register => register a new user, checks to make sure the username (email) is unique otherwise it returns an error. if successful, returns a JWT
        [HttpPost("register")]
        public async Task<ActionResult<UserDTO>> RegisterUser(RegisterDTO registerUser)
        {
            if (await _userService.UserExists(registerUser.UserName)) return BadRequest("User already exists.");

            return await _userService.RegisterUser(registerUser);
        }

        // /api/users/login => login a user if their credentials match a user in the database, otherwise returns an error. if successful, returns a JWT
        [HttpPost("login")]
        public ActionResult<UserDTO> LoginUser(LoginDTO loginUser)
        {
            string invalidMessage = "Invalid username or password.";

            var user =  _userService.FindUserByUsername(loginUser.UserName);
            if (user == null) return Unauthorized(invalidMessage);

            var validPassword = _userService.VerifyPassword(user, loginUser);
            if (!validPassword) return Unauthorized(invalidMessage);

            return _userService.GenerateUserToken(user);
        }
    }
}