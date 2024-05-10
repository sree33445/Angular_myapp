import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiply',
})
export class MultiplyPipe implements PipeTransform {
  transform(value: number, multiply: number): number {
    return value * multiply;
  }
}
