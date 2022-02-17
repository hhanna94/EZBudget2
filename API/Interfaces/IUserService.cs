using System.Collections.Generic;
using System.Threading.Tasks;
using API.Models;
using API.Models.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace API.Interfaces
{
    public interface IUserService
    {
        // Return a list of all users
        Task<ActionResult<IEnumerable<UserModel>>> GetAllUsers();

        // Return a user
        ActionResult<UserModel> GetOneUser(int id);

        // Register a new user
        Task<ActionResult<UserDTO>> RegisterUser(RegisterDTO registerUser);

        // Check if a user exists by their username
        Task<bool> UserExists(string username);

        // Login a user based on username and password
        Task<ActionResult<UserDTO>> LoginUser(LoginDTO loginUser);
    }
}