import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { BudgetDetailComponent } from "./budget-detail/budget-detail.component";

const routes: Routes = [
  { path: '', component: BudgetDetailComponent, canActivate: [AuthGuard]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetRoutingModule {}
