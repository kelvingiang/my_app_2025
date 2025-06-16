import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'summary'})
export class SummaryPipe implements PipeTransform {
    transform(input: string, totalCharacter: number = 20, more: string = ' more....'): string {
         return input.substring(0,totalCharacter) + more;
    }
}