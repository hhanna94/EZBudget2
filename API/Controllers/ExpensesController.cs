using API.Services;

namespace API.Controllers 
{
    public class ExpensesController : BaseApiController
    {
        private readonly ExpensesService _service;
        public ExpensesController(ExpensesService service)
        {
            _service = service;
        }
    }
}