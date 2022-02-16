using System.ComponentModel.DataAnnotations;

namespace API.Models
{
    public class UserModel
    {
        [Key]
        public int Id { get; set; }
        public string UserName { get; set; }
    }
}