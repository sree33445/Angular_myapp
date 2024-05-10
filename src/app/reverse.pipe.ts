import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value:string):string {
    let newvalue = value.split('').reverse().join('');
    return newvalue;
  }

}
