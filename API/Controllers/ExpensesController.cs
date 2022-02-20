using System;
using System.Collections.Generic;
using API.Models;
using API.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace API.Controllers 
{
    public class ExpensesController : BaseApiController
    {
        private readonly ExpensesService _service;
        private readonly UserService _userService;
        public ExpensesController(ExpensesService service, UserService userService)
        {
            _service = service;
            _userService = userService;
        }

        [Authorize]
        [HttpPost]
        public ActionResult<Expense> CreateExpense(Expense newExpense)
        {
            Expense expense = _service.CreateExpense(newExpense).Value;
            if (expense == null)
            {
                return BadRequest("Failed to create expense.");
            }
            return Ok(expense);
        }

        [Authorize]
        [HttpGet("{userId}")]
        public IActionResult GetUserExpenses(int userId)
        {
            IEnumerable<Expense> expenses = _service.GetUserExpenses(userId).Value.ToArray();
            return Ok(expenses);
        }
    }
}