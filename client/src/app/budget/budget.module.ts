import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetDetailComponent } from './budget-detail/budget-detail.component';
import { BudgetRoutingModule } from './budget-routing.module';



@NgModule({
  declarations: [BudgetDetailComponent],
  imports: [
    CommonModule,
    BudgetRoutingModule,
  ]
})
export class BudgetModule { }
