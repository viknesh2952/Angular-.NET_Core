import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipeExamplesComponent } from './pipe-examples/pipe-examples.component';
import { DashboardComponent } from '../core/dashboard/dashboard.component';
import { DirectivesExComponent } from './directives-ex/directives-ex.component';
import { ObservablesComponent } from './observables/observables.component';
import { ProjectionExComponent } from './projection-ex/projection-ex.component';
import { TemplatePropertiesComponent } from './template-properties/template-properties.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: 'pipes', component: PipeExamplesComponent },
      { path:'directives',component:DirectivesExComponent },
      { path:'observables',component:ObservablesComponent },
      { path:'projection',component:ProjectionExComponent },
      { path:'template_prop',component:TemplatePropertiesComponent }
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
