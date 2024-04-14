import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipeExamplesComponent } from './pipe-examples/pipe-examples.component';
import { DashboardComponent } from '../core/dashboard/dashboard.component';
import { DirectivesExComponent } from './directives-ex/directives-ex.component';
import { ObservablesComponent } from './observables/observables.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: 'pipes', component: PipeExamplesComponent },
      { path:'directives',component:DirectivesExComponent },
      { path:'observables',component:ObservablesComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ConceptsRoutingModule { }
