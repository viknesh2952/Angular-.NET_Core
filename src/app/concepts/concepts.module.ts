import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConceptsRoutingModule } from './concepts-routing.module';
import { PipeExamplesComponent } from './pipe-examples/pipe-examples.component';
import { FormsModule } from '@angular/forms';
import { UtilitiesModule } from '../utilities/utilities.module';
import { DirectivesExComponent } from './directives-ex/directives-ex.component';
import { ObservablesComponent } from './observables/observables.component';
import { ProjectionExComponent } from './projection-ex/projection-ex.component';
import { ChildContentComponent } from './projection-ex/child-content/child-content.component';
import { TemplatePropertiesComponent } from './template-properties/template-properties.component';
import { ChildTemplateComponent } from './template-properties/child_template/child-template.component';


@NgModule({
  declarations: [
    PipeExamplesComponent,
    DirectivesExComponent,
    ObservablesComponent,
    ProjectionExComponent,
    ChildContentComponent,
    TemplatePropertiesComponent,
    ChildTemplateComponent
  ],
  imports: [
    CommonModule,
    ConceptsRoutingModule,
    FormsModule,
    UtilitiesModule
  ]
})
export class ConceptsModule { }
