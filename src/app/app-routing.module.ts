import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';

const routes: Routes = [
  {path: 'hello', component: HelloComponent},
  {path : "buoi1",  loadChildren: () => import('./Buoi1/buoi1.module').then(m => m.Buoi1Module)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
