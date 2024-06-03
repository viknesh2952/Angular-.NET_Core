import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, SimpleChanges, TemplateRef } from '@angular/core';

@Component({
  selector: 'child-template',//selector name changed here
  templateUrl: './child-template.component.html',
  styleUrl: './child-template.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush // We can use this method or use detach, reattach with markForChanges() combination
})
export class ChildTemplateComponent {
@Input('template') templateInput!:TemplateRef<any>;
@Input('listInput') listInput!:number[];//this will not be tracked in ngOnChanges of child element by default as it is non-primitive data type
@Input('InputEmitfromParent') InputEmitfromParent:any;
@Output() afterClick:EventEmitter<any> = new EventEmitter();
constructor(private changeDet: ChangeDetectorRef){

}
submit(){
  this.afterClick.emit('from child component');
}
valueFromChild(){
  return 'Accessing Child method from parent';
}
// ngOnChanges(changes:SimpleChanges){
//   this.changeDet.detectChanges();
// }
refresh(){
  this.changeDet.detectChanges();
}
}
