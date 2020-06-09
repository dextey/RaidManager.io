using System.ComponentModel.DataAnnotations;

namespace RaidManager.API.DataTransferObjects
{
    public class UserForRegisterDTO
    {
        [Required(ErrorMessage = "The username field is required")]
        public string username { get; set; }

        [Required]
        [StringLength(12, MinimumLength = 4, ErrorMessage = "Password must be atleast 4 characters long and 12 characters max")]
        public string password { get; set; }
    }
}