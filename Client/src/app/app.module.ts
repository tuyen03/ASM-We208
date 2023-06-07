import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { HomePageComponent } from './pages/home-page/home-page/home-page.component';
import { HttpClientModule } from "@angular/common/http";





import { LayoutMenuComponent } from './layouts/layout-menu/layout-menu.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    HomePageComponent,



    
    LayoutMenuComponent,
    ProductPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
