import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'categoryCourse' })
export class CategoryCoursePipe implements PipeTransform {
  transform(categories: string[]): any {
    let result: string[] = [];

    if (categories) {
      let s = 0;
      console.log(categories);
      categories.forEach((category) => {
        s += 1;
        if (result.indexOf("<div>" + category + "</div>") <= -1) {
          result.push("<div>" + category + "</div>");
        }
      });
      console.log(result);
    }
    return result.join(" ");
  }
}
