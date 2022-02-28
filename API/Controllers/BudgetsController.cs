using System.Collections.Generic;
using API.Models;
using API.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BudgetsController : BaseApiController
    {
        private readonly BudgetService _service;
        private readonly UserService _userService;
        public BudgetsController(BudgetService service, UserService userService)
        {
            _service = service;
            _userService = userService;
        }

        [Authorize]
        [HttpPost]
        public ActionResult<Budget> CreateBudget(Budget newBudget)
        {
            Budget budget = _service.CreateBudget(newBudget);
            if (budget == null)
            {
                return BadRequest("Failed to create Budget.");
            }
            return Ok(budget);
        }

        [Authorize]
        [HttpGet("user/{userId}")]
        public ActionResult<List<Budget>> GetUserBudgets(int userId)
        {
            List<Budget> budgets = _service.GetBudgets(userId);
            return Ok(budgets);
        }
    }
}