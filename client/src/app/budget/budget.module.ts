import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetDetailComponent } from './budget-detail/budget-detail.component';
import { BudgetRoutingModule } from './budget-routing.module';
import { BudgetFormComponent } from './budget-form/budget-form.component';
import { BudgetComponent } from './budget.component';



@NgModule({
  declarations: [BudgetDetailComponent, BudgetFormComponent, BudgetComponent],
  imports: [
    CommonModule,
    BudgetRoutingModule,
  ]
})
export class BudgetModule { }
