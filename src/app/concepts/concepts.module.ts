import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConceptsRoutingModule } from './concepts-routing.module';
import { PipeExamplesComponent } from './pipe-examples/pipe-examples.component';
import { FormsModule } from '@angular/forms';
import { UtilitiesModule } from '../utilities/utilities.module';
import { DirectivesExComponent } from './directives-ex/directives-ex.component';
import { ObservablesComponent } from './observables/observables.component';


@NgModule({
  declarations: [
    PipeExamplesComponent,
    DirectivesExComponent,
    ObservablesComponent
  ],
  imports: [
    CommonModule,
    ConceptsRoutingModule,
    FormsModule,
    UtilitiesModule
  ]
})
export class ConceptsModule { }
