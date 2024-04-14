import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cache'
})
export class CachePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
