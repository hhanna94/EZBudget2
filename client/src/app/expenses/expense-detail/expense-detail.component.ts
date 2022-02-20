import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expense-detail',
  templateUrl: './expense-detail.component.html',
  styleUrls: ['./expense-detail.component.css']
})
export class ExpenseDetailComponent implements OnInit {
  expenses = [];

  constructor(private expenseService: ExpenseService) { }

  ngOnInit(): void {
    let userId = JSON.parse(localStorage.getItem("userData")).id;
    this.expenseService.getUserExpenses(userId);
  }

}
