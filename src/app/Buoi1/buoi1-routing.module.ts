import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Bai2Component } from './bai2/bai2.component';
import { Bai6Component } from './bai6/bai6.component';

const routes: Routes = [
  {path: "bai2", component: Bai2Component},
  {path: "bai6", component: Bai6Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Buoi1RoutingModule { }
