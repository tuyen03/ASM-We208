import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table'  

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { HomePageComponent } from './pages/home-page/home-page/home-page.component';
import { HttpClientModule } from "@angular/common/http";
import { LayOutAdminComponent } from './layouts/Admin/lay-out-admin/lay-out-admin.component';
import { DashBoardComponent } from './pages/Admin/dash-board/dash-board.component';
import { AddProductComponent } from './pages/Admin/add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowProductComponent } from './pages/Admin/CRUD_Product/show-product/show-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditProductComponent } from './pages/Admin/CRUD_Product/edit-product/edit-product.component';
import { AddCategoryComponent } from './pages/Admin/CRUD_Category/add-category/add-category.component';
import { ShowCategoryComponent } from './pages/Admin/CRUD_Category/show-category/show-category.component';
import { EditCategoryComponent } from './pages/Admin/CRUD_Category/edit-category/edit-category.component';
import { ShowOrderComponent } from './pages/Admin/Order/show-order/show-order.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    HomePageComponent,
    LayOutAdminComponent,
    DashBoardComponent,
    AddProductComponent,
    ShowProductComponent,
    EditProductComponent,
    AddCategoryComponent,
    ShowCategoryComponent,
    EditCategoryComponent,
    ShowOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
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
