import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExpenseDTO } from './expense-form/expense-form.component';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private _categories = ['Rent/Mortgage', 'Credit Cards', 'Loans', 'Utilities', 'Car', 'Health', 'Groceries', 'Entertainment', 'Misc'];

  constructor(private http: HttpClient) { }

  get categories() {
    return [...this._categories];
  }

  createExpense(expense: ExpenseDTO) {
    this.http.post('http://localhost:5000/api/expenses', expense)
      .subscribe( res => {
        console.log(res);
      }, err => {
        console.log(err);
      })
  }

  getUserExpenses(userId: number) {
    this.http.get(`http://localhost:5000/api/expenses/${userId}`)
      .subscribe( res => {
        console.log(res)
      }, err => {
        console.log(err)
      })
  }




}
