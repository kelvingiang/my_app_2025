
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { VongdoiComponent } from './vongdoi/vongdoi.component';
import { OnChangesComponent } from './onchanges/onchanges.component';
import { AfterContentComponent} from './aftercontent/aftercontent.component';
import { ScrollComponent } from "./scroll/scroll.component";
import { MenuNgangComponent } from "./menu-ngang/menu-ngang.component";

const routes: Routes = [
  { path: "vongdoi", component: VongdoiComponent },
  { path: "onchanges", component: OnChangesComponent },
  { path: "aftercontent", component: AfterContentComponent},
  { path: "scroll", component: ScrollComponent},
  { path: "menu-ngang", component: MenuNgangComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicRoutingModule {}
