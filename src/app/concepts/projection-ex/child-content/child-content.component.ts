import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-content',
  templateUrl: './child-content.component.html',
  styleUrl: './child-content.component.css'
})
export class ChildContentComponent {
@Input('valueBy') value!:string;
@Input('method') method!:string;
@Output() childEmitted = new EventEmitter();
ngOnInit(){
  this.childEmitted.emit();
}
}
