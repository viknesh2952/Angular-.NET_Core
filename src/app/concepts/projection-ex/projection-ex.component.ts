import { Component } from '@angular/core';

@Component({
  selector: 'app-projection-ex',
  templateUrl: './projection-ex.component.html',
  styleUrl: './projection-ex.component.css'
})
export class ProjectionExComponent {
  property:string='binding'
  conditionalContent:boolean = false;
  childEmitted(event: any){
    console.log('Child event-'+event)
  }
}
