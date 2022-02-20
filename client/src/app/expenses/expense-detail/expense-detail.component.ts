import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expense-detail',
  templateUrl: './expense-detail.component.html',
  styleUrls: ['./expense-detail.component.css']
})
export class ExpenseDetailComponent implements OnInit, OnDestroy {
  expenses = [];
  expensesSub: Subscription;

  constructor(private expenseService: ExpenseService) { }

  ngOnInit(): void {
    let userId = JSON.parse(localStorage.getItem("userData")).id;
    this.expenseService.getUserExpenses(userId);
    this.expensesSub = this.expenseService.getExpensesUpdateListener()
      .subscribe( expenses => {
        this.expenses = expenses;
      })
  }

  ngOnDestroy(): void {
      this.expensesSub.unsubscribe();
  }

}
