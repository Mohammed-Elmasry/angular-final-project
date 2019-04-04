import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './top/header/header.component';
import { NavigationLinkComponent } from './top/navigation-link/navigation-link.component';
import { FooterComponent } from './footer/footer.component';
import { WishCounterComponent } from './top/wish-counter/wish-counter.component';
import { CartCounterComponent } from './top/cart-counter/cart-counter.component';
import { RegisterComponent } from './forms/register/register.component';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { HomePageComponent } from './body/home-page/home-page.component';
import { CartPageComponent } from './body/cart-page/cart-page.component';
import { WishPageComponent } from './body/wish-page/wish-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationLinkComponent,
    FooterComponent,
    WishCounterComponent,
    CartCounterComponent,
    RegisterComponent,
    LoginFormComponent,
    HomePageComponent,
    CartPageComponent,
    WishPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
