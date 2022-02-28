import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-budget-detail',
  templateUrl: './budget-detail.component.html',
  styleUrls: ['./budget-detail.component.css']
})
export class BudgetDetailComponent implements OnInit {
  budgets = [];
  loggedInUserId: number;

  constructor(private _service: BudgetService) { }

  ngOnInit(): void {
    this.loggedInUserId = JSON.parse(localStorage.getItem("userData")).id,
    this._service.getUserBudgets(this.loggedInUserId);
  }

}
