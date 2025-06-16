import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import {ScheduleComponent} from "./schedule/schedule.component";
import { AdvertisingComponent } from "./advertising/advertising.component";
import { DetailComponent} from "./advertising/detail/detail.component";



const routes: Routes = [
  { path: "schedule", component: ScheduleComponent, },
  { path: "advertising", component: AdvertisingComponent, },
  { path: "advertising-detail/:id", component : DetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WordpressRoutingModule {}
