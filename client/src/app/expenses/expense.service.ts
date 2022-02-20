import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { ExpenseDTO } from './expense-form/expense-form.component';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private _categories = ['Rent/Mortgage', 'Credit Cards', 'Loans', 'Utilities', 'Car', 'Health', 'Groceries', 'Entertainment', 'Misc'];
  expenses = [];
  private expensesUpdated = new Subject<any[]>();

  constructor(private http: HttpClient) { }

  get categories() {
    return [...this._categories];
  }

  getExpensesUpdateListener() {
    return this.expensesUpdated.asObservable();
  }

  createExpense(expense: ExpenseDTO) {
    this.http.post('http://localhost:5000/api/expenses', expense)
      .subscribe({
        next: res => {
          this.expenses.push(res);
          this.expensesUpdated.next([...this.expenses]);
        },
        error: err => {
          console.log(err);
      }})
  }

  getUserExpenses(userId: number) {
    this.http.get<any[]>(`http://localhost:5000/api/expenses/${userId}`)
      .subscribe({
        next: res => {
          this.expenses = res;
          this.expensesUpdated.next([...this.expenses]);
        },
        error: err => console.log(err)
      })
  }




}
