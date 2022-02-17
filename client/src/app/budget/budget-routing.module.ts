import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { BudgetDetailComponent } from "./budget-detail/budget-detail.component";
import { BudgetFormComponent } from "./budget-form/budget-form.component";
import { BudgetComponent } from "./budget.component";

const routes: Routes = [
  { path: '', component: BudgetComponent, canActivate: [AuthGuard], children: [
    { path: '', component: BudgetDetailComponent },
    { path: 'new', component: BudgetFormComponent}
  ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetRoutingModule {}
