import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './body/home-page/home-page.component';
import { CartCounterComponent } from './top/cart-counter/cart-counter.component';
import { WishCounterComponent } from './top/wish-counter/wish-counter.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomePageComponent},
  {path:'cart', component:CartCounterComponent},
  {path:'wish', component:WishCounterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
