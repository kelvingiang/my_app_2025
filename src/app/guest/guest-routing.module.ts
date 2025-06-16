import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { GuestModifyComponent } from "./guest-modify/guest-modify.component";
import { GuestNewComponent } from "./guest-new/guest-new.component";


const routes: Routes = [
  { path: "guest-modify/:id", component: GuestModifyComponent },
  { path: "guest-new", component: GuestNewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuestRoutingModule {}
