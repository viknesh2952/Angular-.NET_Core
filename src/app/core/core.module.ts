import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { PlaygroundComponent } from './playground/playground.component';
import { UtilitiesModule } from '../utilities/utilities.module';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    DashboardComponent,
    PlaygroundComponent
  ],
  imports: [
    CommonModule,UtilitiesModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
