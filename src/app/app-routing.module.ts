import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { ViolationsComponent } from './violations/violations.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'violations', component: ViolationsComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'faq', component: FaqComponent
  },
  {
    path: '**', redirectTo: 'violations'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
