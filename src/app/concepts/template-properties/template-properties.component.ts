import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';
import { ChildTemplateComponent } from './child_template/child-template.component';

@Component({
  selector: 'app-template-properties',
  templateUrl: './template-properties.component.html',
  styleUrl: './template-properties.component.css'
})
export class TemplatePropertiesComponent implements AfterViewInit {
  @ViewChild('sampleTemplate') templateFromReference!:TemplateRef<any>;
  @ViewChild(ChildTemplateComponent,{static:false}) childTemplate !:ChildTemplateComponent;
  childMsg = ''
  clickFun(event: any){
    this.childMsg = event;
  }
  ngAfterViewInit(){
    console.log('Child has been initialized!');
  }
  childMethod(){
    alert(this.childTemplate.valueFromChild());
  }
}
