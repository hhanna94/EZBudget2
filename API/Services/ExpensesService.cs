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
            Expense expense =  _repo.CreateExpense(newExpense);
            return expense;
        }

        public ActionResult<List<Expense>> GetUserExpenses(int userId)
        {
            List<Expense> expenses = _repo.GetUserExpenses(userId);
            return expenses;
        }

        public ActionResult<Expense> UpdateExpense(Expense newExpense)
        {
            Expense expense =  _repo.UpdateExpense(newExpense);
            return expense;
        }
    }
}