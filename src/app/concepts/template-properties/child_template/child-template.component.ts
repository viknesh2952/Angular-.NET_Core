import { Component, EventEmitter, Input, Output, QueryList, TemplateRef } from '@angular/core';

@Component({
  selector: 'child-template',//selector name changed here
  templateUrl: './child-template.component.html',
  styleUrl: './child-template.component.css'
})
export class ChildTemplateComponent {
@Input('template') templateInput!:TemplateRef<any>;
@Output() afterClick:EventEmitter<any> = new EventEmitter();
submit(){
  this.afterClick.emit('from child component');
}
valueFromChild(){
  return 'Accessing Child method from parent';
}
}
