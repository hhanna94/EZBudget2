import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Expense } from 'src/app/shared/models/expense.model';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expense-detail',
  templateUrl: './expense-detail.component.html',
  styleUrls: ['./expense-detail.component.css']
})
export class ExpenseDetailComponent implements OnInit, OnDestroy {
  expenses: Expense[];
  expensesSub: Subscription;
  isLoading = false;

  constructor(private expenseService: ExpenseService) { }

  ngOnInit(): void {
    let userId = JSON.parse(localStorage.getItem("userData")).id;
    this.expenseService.getUserExpenses(userId);
    this.expensesSub = this.expenseService.getExpensesUpdateListener()
    .subscribe( expenses => {
        this.isLoading = true;
        this.expenses = expenses;
        this.isLoading = false;
      })
  }

  onSelect(expense: Expense) {
    this.expenseService.selectedExpense = expense;
  }

  onDelete(expenseId: number) {
    this.expenseService.deleteExpense(expenseId);
  }

  ngOnDestroy(): void {
      this.expensesSub.unsubscribe();
  }

}
