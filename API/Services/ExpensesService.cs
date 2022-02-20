using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using API.Models;
using API.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace API.Services
{
    public class ExpensesService
    {
        private readonly ExpensesRepository _repo;
        public ExpensesService(ExpensesRepository repo)
        {
            _repo = repo;
        }

        public ActionResult<Expense> CreateExpense(Expense newExpense)
        {
            var expense =  _repo.CreateExpense(newExpense);
            if (expense == null)
            {
                throw new Exception("Failed to create an expense.");
            }
            return expense;
        }
    }
}