import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { ExpenseDetailComponent } from './expense-detail/expense-detail.component';
import { ExpenseRoutingModule } from './expenses-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ExpenseFormComponent,
    ExpenseDetailComponent
  ],
  imports: [
    CommonModule,
    ExpenseRoutingModule,
    FormsModule
  ]
})
export class ExpensesModule { }
