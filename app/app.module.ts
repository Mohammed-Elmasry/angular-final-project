import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './top/header/header.component';
import { NavigationLinkComponent } from './top/navigation-link/navigation-link.component';
import { FooterComponent } from './footer/footer.component';
import { WishCounterComponent } from './top/wish-counter/wish-counter.component';
import { CartCounterComponent } from './top/cart-counter/cart-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationLinkComponent,
    FooterComponent,
    WishCounterComponent,
    CartCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
