import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'array'})

export class ArrayPipe implements PipeTransform {
    transform(arrayInput: number[] , args : string): any {

        return arrayInput.filter(val =>{
            if(args == 'odd'){
                return val % 2 !== 0;
            }else{
                return val % 2 == 0;
            }
        });
    }
} 