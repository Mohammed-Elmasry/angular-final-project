import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ProductInjectorService } from './services/productsServices/product-injector.service';
import { HttpClientModule } from '@angular/common/http';

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
import { UsernameLogoutComponent } from './top/username-logout/username-logout.component';
import { SingleProductDisplayPageComponent } from './body/single-product-display-page/single-product-display-page.component';
import { SingleProductComponent } from './body/single-product/single-product.component';
import { MustMatch } from './forms/shared/must-match.directive';

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
    UsernameLogoutComponent,
    SingleProductDisplayPageComponent,
    SingleProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [ProductInjectorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
