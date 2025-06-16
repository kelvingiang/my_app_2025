import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryPipe } from './pipes/category.pipe';
import { CategoryCoursePipe } from './pipes/category-course.pipe';
import { SummaryPipe } from './pipes/summary.pipe';
import { SummaryCoursePipe } from './pipes/summary-course.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { ArrayPipe } from './pipes/array.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { RoundNumPipe} from './pipes/round-num.pipe';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [HighlightDirective, 
    CategoryPipe,
    CategoryCoursePipe,
    SummaryPipe,
    SummaryCoursePipe,
    SortPipe,
    ArrayPipe,
    CapitalizePipe, 
    RoundNumPipe
  ],
  exports: [CommonModule, 
    CategoryPipe,
    CategoryCoursePipe,
    SummaryPipe,
    SummaryCoursePipe,
    SortPipe,
    ArrayPipe,
    HighlightDirective, 
    CapitalizePipe, 
    RoundNumPipe],
})
export class ShareModule {}
 