import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sort' })
export class SortPipe implements PipeTransform {
  transform(inputArray: string[], args: string): any {
    let sorted: string[] = inputArray.slice();
    if (args === 'asc') {
      sorted = sorted.sort();
    } else {
      sorted = sorted.reverse();
    }
    return sorted;
  }
}
