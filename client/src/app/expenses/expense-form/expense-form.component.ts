import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css']
})
export class ExpenseFormComponent implements OnInit {
  categories = [];

  constructor(private expenseService: ExpenseService) { }

  ngOnInit(): void {
    this.categories = this.expenseService.categories; 
  }

}
