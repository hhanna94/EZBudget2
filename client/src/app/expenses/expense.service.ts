import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private _categories = ['Rent/Mortgage', 'Credit Cards', 'Loans', 'Utilities', 'Car', 'Health', 'Groceries', 'Entertainment', 'Misc'];

  constructor() { }

  get categories() {
    return [...this._categories];
  }


}
