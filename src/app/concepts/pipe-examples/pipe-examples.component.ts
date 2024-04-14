import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-examples',
  templateUrl: './pipe-examples.component.html',
  styleUrl: './pipe-examples.component.css'
})
export class PipeExamplesComponent {
  names=['Car','Bike','Ship','Auto'];
  filterCriteria:string='';
  addItem(){
    this.names.push('Flight');
  }
}
