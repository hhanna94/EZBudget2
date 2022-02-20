import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ExpenseService } from '../expense.service';

export class ExpenseDTO {
  Description: string;
  Date: Date;
  Amount: number;
  Category: string;
  UserId: number;
}

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css']
})
export class ExpenseFormComponent implements OnInit {
  categories = [];
  errorMsg: string = null;
  expenseDTO: ExpenseDTO;

  constructor(private expenseService: ExpenseService) { }

  ngOnInit(): void {
    this.categories = this.expenseService.categories;
    this.expenseDTO = {
      Description: null,
      Date: null,
      Amount: null,
      Category: null,
      UserId: JSON.parse(localStorage.getItem("userData")).id
    }
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      this.errorMsg = "All fields are required. Please enter a valid expense."
      return;
    }
    console.log(form.value);
  }
}
