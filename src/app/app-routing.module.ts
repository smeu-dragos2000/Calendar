
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, PathLocationStrategy, LocationStrategy } from '@angular/common';

import { HomeComponent } from './MyPages/home/home.component';
import { TurismComponent } from './MyPages/turism/turism.component';
import { TurismAnaComponent } from './MyPages/turism-ana/turism-ana.component';
import { TurismHanComponent } from './MyPages/turism-han/turism-han.component';
import { AdminLoginComponent } from './MyPages/admin-login/admin-login.component';
import { AdminComponent } from './MyPages/admin/admin.component';
import { ContactComponent } from './MyPages/contact/contact.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'turism', component: TurismComponent},
  {path: 'turism-ana', component: TurismAnaComponent},
  {path: 'turism-han', component: TurismHanComponent},
  {path: 'admin-login', component: AdminLoginComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class AppRoutingModule { }
