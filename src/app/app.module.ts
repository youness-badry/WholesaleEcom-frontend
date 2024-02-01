import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ShopModule } from './features/shop/shop.module';
import { HttpClientModule } from  '@angular/common/http';
import { MarquesComponent } from './features/marques/marques.component';
import { NosServicesComponent } from './features/nos-services/nos-services.component';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MarquesComponent,
    NosServicesComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ShopModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
