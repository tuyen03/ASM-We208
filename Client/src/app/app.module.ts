import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table'  

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { HomePageComponent } from './pages/home-page/home-page/home-page.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

import { LayOutAdminComponent } from './layouts/Admin/lay-out-admin/lay-out-admin.component';
import { DashBoardComponent } from './pages/Admin/dash-board/dash-board.component';
import { LayoutMenuComponent } from './layouts/layout-menu/layout-menu.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { AddProductComponent } from './pages/Admin/add-product/add-product.component';
import { ShowProductComponent } from './pages/Admin/CRUD_Product/show-product/show-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditProductComponent } from './pages/Admin/CRUD_Product/edit-product/edit-product.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    HomePageComponent,
    SignupComponent,
    SigninComponent,
    ProductDetailComponent,
    LayOutAdminComponent,
    DashBoardComponent,
    LayoutMenuComponent,
    ProductPageComponent,
    AddProductComponent,
    ShowProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
