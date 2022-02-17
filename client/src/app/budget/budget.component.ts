import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget',
  template: `
  <h2 class="text-center mb-3">Budgets</h2>
  <router-outlet></router-outlet>
  `
})
export class BudgetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
