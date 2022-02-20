using API.Repositories;

namespace API.Services
{
    public class ExpensesService
    {
        private readonly ExpensesRepository _repo;
        public ExpensesService(ExpensesRepository repo)
        {
            _repo = repo;
        }
    }
}