using System.Collections.Generic;
using System.Linq;
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

        public Expense CreateExpense(Expense newExpense) {
            Expense expense = _context.Expenses.Add(newExpense).Entity;
            _context.SaveChanges();
            return expense;
        }

        public List<Expense> GetUserExpenses(int userId)
        {
            List<Expense> expenses = _context.Expenses
                .Where(expense => expense.UserId == userId)
                .ToList();
            return expenses;
        }

    }
}