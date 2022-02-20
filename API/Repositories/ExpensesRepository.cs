using API.Data;

namespace API.Repositories
{
    public class ExpensesRepository
    {
        private readonly DataContext _context;
        public ExpensesRepository(DataContext context)
        {
            _context = context;
        }
    }
}