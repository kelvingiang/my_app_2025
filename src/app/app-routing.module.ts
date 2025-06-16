import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './basic/about/about.component';
import { HomeComponent } from './basic/home/home.component';
import { ContactComponent } from './basic/contact/contact.component'; 
import { NotFoundComponent } from './basic/not-found/not-found.component';
import { ProductsComponent } from './products/products.component';
import { MembersComponent } from './members/members.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent} from './basic/logout/logout.component';
import { LoadMoreComponent } from './load-more/load-more.component';
import { ReadXmlComponent } from './read-xml/read-xml.component';

import { GuestComponent } from './guest/guest.component';
// import { ScheduleComponent } from './wordpress/schedule/schedule.component';




const routes: Routes = [
   // ADD PATH CÁI PATH NÀO PHỨT TẠP HƠN ĐỂ TRÊN NHƯNG PATH THƯỜNG
   // VD: {path:'PATH:DI', component: ProductsComponent}
   // RIÊNG TRANG 404 (**) PHẢI ĐỂ DƯỚI CÙNG

  // CÁC TRANG CON ======
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'members', component: MembersComponent},
  {path: 'users', component: UsersComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path:  'load-more', component: LoadMoreComponent},
  {path: 'xml', component: ReadXmlComponent},
  // {path: 'schedule', component: ScheduleComponent},
  {path: 'guest', component: GuestComponent},
  

  // TRANG MẶC ĐINH KHI MỚI MỞ ==================
   {path: '', component: HomeComponent},
 
   // trang 404 ==============================
   {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
