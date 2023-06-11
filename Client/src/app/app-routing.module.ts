import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { HomePageComponent } from './pages/home-page/home-page/home-page.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { AddProductComponent } from './pages/Admin/add-product/add-product.component';
import { ShowProductComponent } from './pages/Admin/CRUD_Product/show-product/show-product.component';
import { EditProductComponent } from './pages/Admin/CRUD_Product/edit-product/edit-product.component';
import { AddCategoryComponent } from './pages/Admin/CRUD_Category/add-category/add-category.component';
import { ShowCategoryComponent } from './pages/Admin/CRUD_Category/show-category/show-category.component';
import { EditCategoryComponent } from './pages/Admin/CRUD_Category/edit-category/edit-category.component';
import { ShowOrderComponent } from './pages/Admin/Order/show-order/show-order.component';

import { MyOrderComponent } from './pages/my-order/my-order.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { LayoutMenuComponent } from './layouts/layout-menu/layout-menu.component';
import { DashBoardComponent } from './pages/Admin/dash-board/dash-board.component';
import { LayOutAdminComponent } from './layouts/Admin/lay-out-admin/lay-out-admin.component';
import { OrderDetailComponent } from './pages/Admin/Order/order-detail/order-detail.component';

const routes: Routes = [
    {
        path: "", component: HomeLayoutComponent, children: [
            { path: "", redirectTo: "", pathMatch: "full" },
            { path: "", component: HomePageComponent },
        ]
    },

    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },

    {
        path: "Admin", component: LayOutAdminComponent, children: [
            { path: "", redirectTo: "DashBoard", pathMatch: "full" },
            { path: "DashBoard", component: DashBoardComponent },
            { path: "Add_Product", component: AddProductComponent },
            { path: "Show_Product", component: ShowProductComponent },
            { path: "Edit_Product/:id", component: EditProductComponent },

            //todo CategoriesComponent Start
            { path: "Category", component: AddCategoryComponent },
            { path: "Show_Category", component: ShowCategoryComponent },
            { path: "Edit_Category/:id", component: EditCategoryComponent },
            //todo CategoriesComponent End

            //todo Order Start
            { path: "Order", component: ShowOrderComponent },
            { path: "Order/:id", component: OrderDetailComponent },
            //todo Order End
        ]
    },
    {
        path: "product", component: LayoutMenuComponent, children: [
            { path: "", component: ProductPageComponent },
            { path: ':id', component: ProductDetailComponent }
        ]
    },
    { path: 'cart', component: ShoppingCartComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'my-order', component: MyOrderComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
