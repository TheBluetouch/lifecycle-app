import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {ContactComponent} from './component/contact/contact.component';
import {AboutComponent} from './component/about/about.component';
import {TestComponent} from './component/test/test.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
},
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
