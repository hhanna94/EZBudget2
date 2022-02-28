using System.Collections.Generic;
using System.Linq;
using API.Data;
using API.Models;

namespace API.Repositories
{
    public class BudgetRepository
    {
        private readonly DataContext _context;

        public BudgetRepository(DataContext context)
        {
            _context = context;
        }

        public Budget CreateBuget(Budget newBudget) {
            Budget budget = _context.Budgets.Add(newBudget).Entity;
            _context.SaveChanges();
            return budget;
        }

        public List<Budget> GetUserBudgets(int userId) {
            List<Budget> budgets = _context.Budgets
                .Where(budget => budget.UserId == userId)
                .ToList();
            return budgets;
        }
    }
}