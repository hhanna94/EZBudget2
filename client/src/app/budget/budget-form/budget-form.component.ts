import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ExpenseService } from 'src/app/expenses/expense.service';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.css']
})
export class BudgetFormComponent implements OnInit {
  availableBudget: number;
  budgetFormDTO: BudgetDTO;
  budgetFormData: any;
  errorMsg: string = null;

  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
    this.budgetFormDTO = {
      userId: JSON.parse(localStorage.getItem("userData")).id,
      name: null,
      income: 0,
      remainder: 0,
      savings: 0,
      rent: 0,
      utilities: 0,
      car: 0,
      creditCard: 0,
      health: 0,
      entertainment: 0,
      loans: 0,
      groceries: 0,
      misc: 0
    }
    this.budgetFormData = this.budgetFormDTO;
  }

  onChange(form: NgForm) {
    let formValues = form.value;
    let budget = formValues.income - formValues.savings;
    let expenses = formValues.rent + formValues.health + formValues.car + formValues.groceries + formValues.utilities + formValues.misc + formValues.creditCard + formValues.loans + formValues.entertainment;
    let remainder = formValues.remainder

    this.availableBudget = budget - expenses - remainder;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      this.errorMsg = "All fields are required.";
      return;
    }
    if (this.availableBudget > 0) {
      this.errorMsg = "Must use up all money. Add it to savings or leave it in your account!";
      return;
    }
    this.budgetService.createBudget(form.value);
  }

}

export class BudgetDTO {
  userId: number;
  name: string;
  income: number;
  remainder: number;
  savings: number;
  rent: number;
  car: number;
  utilities: number;
  creditCard: number;
  health: number;
  entertainment: number;
  loans: number;
  groceries: number;
  misc: number;
}
