using System.ComponentModel.DataAnnotations;

namespace API.Models.DTOs
{
    public class RegisterDTO
    {
        [Required]
        public string UserName { get; set; }
        
        [Required]
        public string Password { get; set; }

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }
    }
}