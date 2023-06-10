import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { HomePageComponent } from './pages/home-page/home-page/home-page.component';
import { LayOutAdminComponent } from './layouts/Admin/lay-out-admin/lay-out-admin.component';
import { DashBoardComponent } from './pages/Admin/dash-board/dash-board.component';
import { AddProductComponent } from './pages/Admin/add-product/add-product.component';
import { ShowProductComponent } from './pages/Admin/CRUD_Product/show-product/show-product.component';
import { EditProductComponent } from './pages/Admin/CRUD_Product/edit-product/edit-product.component';
import { AddCategoryComponent } from './pages/Admin/CRUD_Category/add-category/add-category.component';
import { ShowCategoryComponent } from './pages/Admin/CRUD_Category/show-category/show-category.component';
import { EditCategoryComponent } from './pages/Admin/CRUD_Category/edit-category/edit-category.component';
import { ShowOrderComponent } from './pages/Admin/Order/show-order/show-order.component';


const routes: Routes = [
    {
        path: "", component: HomeLayoutComponent, children: [
            { path: "", redirectTo: "", pathMatch: "full" },
            { path: "", component: HomePageComponent }
        ]
    },
    {
        path: "Admin", component: LayOutAdminComponent, children: [
            { path: "", redirectTo: "DashBoard", pathMatch: "full" },
            { path: "DashBoard", component: DashBoardComponent },
            { path: "Add_Product", component: AddProductComponent },
            {path : "Show_Product", component : ShowProductComponent},
            {path : "Edit_Product/:id", component : EditProductComponent},
            //todo CategoriesComponent Start
            {path : "Category", component : AddCategoryComponent},
            {path : "Show_Category", component : ShowCategoryComponent},
            {path : "Edit_Category/:id", component : EditCategoryComponent},
            //todo CategoriesComponent End

              //todo Order Start
              {path : "Order", component : ShowOrderComponent},
              //todo Order End
        ]
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
