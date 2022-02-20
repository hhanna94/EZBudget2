using System.Threading.Tasks;
using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Repositories
{
    public class ExpensesRepository
    {
        private readonly DataContext _context;
        public ExpensesRepository(DataContext context)
        {
            _context = context;
        }

        public ActionResult<Expense> CreateExpense(Expense newExpense) {
            Expense expense = _context.Expenses.Add(newExpense).Entity;
            _context.SaveChanges();
            return expense;
        }

    }
}