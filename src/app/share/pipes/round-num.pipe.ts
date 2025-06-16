import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'roundNum' })
export class RoundNumPipe implements PipeTransform {
  
  transform(value: number, flag: boolean, add: number): number {
    if (flag) {
      return Math.ceil(value + add);
    } else {
      return Math.floor(value + add);
    }
  }
}
