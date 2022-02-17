import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "src/app/auth/auth.guard";
import { ExpenseDetailComponent } from "./expense-detail/expense-detail.component";

const routes: Routes = [
  { path: '', component: ExpenseDetailComponent, canActivate: [AuthGuard], children: [
    { path: '', component: ExpenseDetailComponent }
  ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenseRoutingModule {}
