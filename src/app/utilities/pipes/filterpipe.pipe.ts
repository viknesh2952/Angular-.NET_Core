import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe',
  pure:false
})
//Pipe implemented for filtering
export class FilterpipePipe implements PipeTransform {
  transform(value: string[], pattern:string,casing?:string): any {
      if(casing=="case-sensitive"){
        return value.filter(name=>name.includes(pattern))
      }
      else{
        return value.filter(name=>name.toLowerCase().includes(pattern.toLowerCase()))  
      }
    }
  }
