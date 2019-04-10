import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './body/home-page/home-page.component';
import { CartPageComponent } from './body/cart-page/cart-page.component';
import { WishPageComponent } from './body/wish-page/wish-page.component';
import { SingleProductDisplayPageComponent } from './body/single-product-display-page/single-product-display-page.component';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { RegisterComponent } from './forms/register/register.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomePageComponent},
  {path:'cart', component:CartPageComponent},
  {path:'wish', component:WishPageComponent},
  {path:'details/:id', component: SingleProductDisplayPageComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
