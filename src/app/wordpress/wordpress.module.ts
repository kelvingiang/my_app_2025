import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ScheduleComponent } from "./schedule/schedule.component";

import { RouterModule, Routes } from "@angular/router";

import { WordpressRoutingModule } from "./wordpress-routing.module";
import { AdvertisingComponent } from './advertising/advertising.component';
import { DetailComponent } from './advertising/detail/detail.component';

@NgModule({
  declarations: [ScheduleComponent, AdvertisingComponent, DetailComponent],
  imports: [CommonModule, FormsModule, RouterModule, WordpressRoutingModule],
})
export class WordpressModule {}
