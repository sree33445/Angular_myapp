import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value:any): number {
    let currentYear = new Date().getFullYear();
    let birthYear = new Date(value).getFullYear();
    let userAge = currentYear - birthYear
    return userAge;
  }

}
