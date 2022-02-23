import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Expense } from 'src/app/shared/models/expense.model';
import { ExpenseService } from '../expense.service';

export class ExpenseDTO {
  description: string;
  date: Date;
  amount: number;
  category: string;
  userId: number;
}

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css']
})
export class ExpenseFormComponent implements OnInit, OnDestroy {
  categories = [];
  errorMsg: string = null;
  expenseDTO: ExpenseDTO;
  selectedExpenseSub: Subscription;
  selectedExpense: Expense;
  isEditMode = false;
  expenseFormData: any;

  constructor(private expenseService: ExpenseService) { }

  ngOnInit(): void {
    this.categories = this.expenseService.categories;
    this.expenseDTO = {
      description: null,
      date: null,
      amount: null,
      category: null,
      userId: JSON.parse(localStorage.getItem("userData")).id
    }
    this.expenseFormData = this.expenseDTO;
    this.selectedExpenseSub = this.expenseService.getSelectedExpenseListener()
      .subscribe(expense => {
        this.isEditMode = true;
        this.expenseFormData = expense;
      })
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      this.errorMsg = "All fields are required. Please enter a valid expense."
      return;
    }
    if (!this.isEditMode) {
      this.expenseService.createExpense(form.value);
      form.resetForm();
    } else {
      
    }
  }

  onClear() {
    this.expenseFormData = this.expenseDTO;
    this.isEditMode = false;
  }

  ngOnDestroy(): void {
      this.selectedExpenseSub.unsubscribe();
  }
}
