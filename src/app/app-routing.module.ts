import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmenItComponent } from './departmen-it/departmen-it.component';
import { DepartmenManagerComponent } from './departmen-manager/departmen-manager.component';

const routes: Routes = [
  {path : 'it', component : DepartmenItComponent},
  {path : 'manager', component : DepartmenManagerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = [DepartmenItComponent, DepartmenManagerComponent]