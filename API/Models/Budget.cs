using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Models
{
    public class Budget
    {
        [Key]
        public int BudgetId { get; set; }
        public string Name { get; set; }
        public double Income { get; set; }
        public double Remainder { get; set; }
        public double Savings { get; set; }
        public double Rent { get; set; }
        public double Car { get; set; }
        public double Utilities { get; set; }
        public double CreditCard { get; set; }
        public double Health { get; set; }
        public double Entertainment { get; set; }
        public double Loans { get; set; }
        public double Groceries { get; set; }
        public double Misc { get; set; }

        [ForeignKey("User")]
        public int UserId { get; set; }
    }
}