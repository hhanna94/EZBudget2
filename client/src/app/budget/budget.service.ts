import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Budget } from "../shared/models/budget.model";
import { BudgetDTO } from "./budget-form/budget-form.component";

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  budgets = [];

  constructor(private http: HttpClient) {}

  createBudget(budget: BudgetDTO) {
    this.http.post<Budget>('http://localhost:5000/api/budgets', budget)
      .subscribe({
        next: res => {
          console.log(res)
        },
        error: err => console.log(err)
      })
  }

  getUserBudgets(userId: number) {
    this.http.get<Budget[]>(`http://localhost:5000/api/budgets/user/${userId}`)
      .subscribe({
        next: res => {
          console.log(res)
        },
        error: err => console.log(err)
      })
  }
}
