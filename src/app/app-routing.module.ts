import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home1Component } from './home1/home1.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { TrendingsComponent } from './trendings/trendings.component';


const routes: Routes = [
  {path:'',component:Home1Component},
  {path:'trending',component:TrendingsComponent},
  {path:'subscriptions',component:SubscriptionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
