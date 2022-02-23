import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { Expense } from '../shared/models/expense.model';
import { ExpenseDTO } from './expense-form/expense-form.component';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private _categories = ['Rent/Mortgage', 'Credit Cards', 'Loans', 'Utilities', 'Car', 'Health', 'Groceries', 'Entertainment', 'Misc'];
  expenses = [];
  private _expensesUpdated = new Subject<any[]>();
  private _selectedExpenseUpdated = new Subject<Expense>();
  private _selectedExpense: Expense;

  constructor(private http: HttpClient) { }

  get categories() {
    return [...this._categories];
  }

  get selectedExpense() {
    return {...this._selectedExpense};
  }

  set selectedExpense(expense: Expense) {
    this._selectedExpense = expense;
    this._selectedExpenseUpdated.next({...this._selectedExpense});
  }

  getExpensesUpdateListener() {
    return this._expensesUpdated.asObservable();
  }

  getSelectedExpenseListener() {
    return this._selectedExpenseUpdated.asObservable();
  }

  createExpense(expense: ExpenseDTO) {
    this.http.post<Expense>('http://localhost:5000/api/expenses', expense)
      .subscribe({
        next: res => {
          this.expenses.push(res);
          this._expensesUpdated.next([...this.expenses]);
        },
        error: err => {
          console.log(err);
      }})
  }

  getUserExpenses(userId: number) {
    this.http.get<any[]>(`http://localhost:5000/api/expenses/user/${userId}`)
      .subscribe({
        next: res => {
          this.expenses = res;
          this._expensesUpdated.next([...this.expenses]);
        },
        error: err => console.log(err)
      })
  }

  updateExpense(expense: Expense) {
    this.http.put<Expense>(`http://localhost:5000/api/expenses/${expense.expenseId}`, expense)
    .subscribe({
      next: res => this.getUserExpenses(res.userId),
      error: err => console.log(err)
    })
  }

  deleteExpense(expenseId: number) {
    this.http.delete<Expense>(`http://localhost:5000/api/expenses/${expenseId}`)
      .subscribe({
        next: res => {
          let newExpenses = this.expenses.filter(expense => expense.expenseId !== res.expenseId);
          this.expenses = newExpenses;
          this._expensesUpdated.next([...this.expenses]);
        },
        error: err => console.log(err)
      })
  }




}
