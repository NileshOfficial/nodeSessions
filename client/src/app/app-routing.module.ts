import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Q1Q2Component } from './q1-q2/q1-q2.component';
import { Q3Component } from './q3/q3.component';

const routes: Routes = [
  {path: "", redirectTo: "Q1-Q2", pathMatch: "full"},
  {path:"Q1-Q2", component: Q1Q2Component},
  {path: "Q3", component: Q3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
