import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'summaryCourse'})
export class SummaryCoursePipe implements PipeTransform {
    transform(input: string, totalCharacter: number = 1, more: string = '....'): string {
        if(input){
            let limit : number =20;
            if(totalCharacter == 2 ) limit = 50;
            if(totalCharacter ==  3) return input;
            return input.substring(0,limit) + more;
        }else{
            return '';
        }
    }
}