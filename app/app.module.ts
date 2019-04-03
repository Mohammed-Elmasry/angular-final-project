import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './top/header/header.component';
import { NavigationLinkComponent } from './top/navigation-link/navigation-link.component';
import { FooterComponent } from './footer/footer.component';
import { WishCounterComponent } from './top/wish-counter/wish-counter.component';
import { CartCounterComponent } from './top/cart-counter/cart-counter.component';
import { RegisterComponent } from './forms/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationLinkComponent,
    FooterComponent,
    WishCounterComponent,
    CartCounterComponent,
    RegisterComponent,
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
