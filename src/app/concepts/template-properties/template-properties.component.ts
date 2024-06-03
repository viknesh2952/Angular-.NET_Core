import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ChildTemplateComponent } from './child_template/child-template.component';

@Component({
  selector: 'app-template-properties',
  templateUrl: './template-properties.component.html',
  styleUrls: ['./template-properties.component.css']
})
export class TemplatePropertiesComponent implements OnInit, AfterViewInit {
  @ViewChild('sampleTemplate') templateFromReference!: TemplateRef<any>;
  @ViewChild(ChildTemplateComponent, { static: false }) childTemplate!: ChildTemplateComponent;
  childMsg = '';
  listValue: number[] = [];

  constructor(private changeDet: ChangeDetectorRef) {}

  ngOnInit() {
    this.listValue = [1, 2, 3];
  }

  clickFun(event: any) {
    this.childMsg = event;
  }

  ngAfterViewInit() {
    console.log('Child has been initialized!');
  }

  childMethod() {
    alert(this.childTemplate.valueFromChild());
  }

  addElement() {
    let val = this.listValue.length-1;
    this.listValue.push(val); //this won't detect changes in onpush strategy
    // this.listValue = [...this.listValue,val]; //this will detect changes in onpush strategy as it is spread 
  }  
}
