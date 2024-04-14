import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PlaygroundComponent } from './playground/playground.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path:'',component:DashboardComponent,children:[
    {path:'playground',component:PlaygroundComponent},
    {path:'',component:PlaygroundComponent}
  ]},
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),CommonModule],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
