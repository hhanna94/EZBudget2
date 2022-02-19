import { Component, OnInit } from '@angular/core';
import { ExpenseService } from 'src/app/expenses/expense.service';

@Component({
  selector: 'app-budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.css']
})
export class BudgetFormComponent implements OnInit {
  categories1 = [];
  categories2 = [];
  categories3 = [];

  constructor(private expenseService: ExpenseService) { }

  ngOnInit(): void {
    let categories = this.expenseService.categories; // 11
    let length = Math.ceil(categories.length/3) // 3

    for (let i = 0; i < categories.length; i++) {
      if (i < length) { // 3
        this.categories1.push(categories[i]);
      } else if (i >= length+1 && i <= (length*2)) {
        this.categories2.push(categories[i]);
      } else {
        this.categories3.push(categories[i]);
      }
    }
    console.log(this.categories1, this.categories2)
  }

}
