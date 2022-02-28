using System.Collections.Generic;
using API.Models;
using API.Repositories;

namespace API.Services
{
    public class BudgetService
    {
        private readonly BudgetRepository _repo;

        public BudgetService(BudgetRepository repo)
        {
            _repo = repo;
        }

        public Budget CreateBudget(Budget newBudget)
        {
            return _repo.CreateBuget(newBudget);
        }

        public List<Budget> GetBudgets(int userId)
        {
            return _repo.GetUserBudgets(userId);
        }
    }
}