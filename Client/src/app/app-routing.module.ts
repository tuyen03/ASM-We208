import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { HomePageComponent } from './pages/home-page/home-page/home-page.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { MyOrderComponent } from './pages/my-order/my-order.component';

const routes: Routes = [
    {
        path: "", component: HomeLayoutComponent, children: [
            { path: "", redirectTo: "", pathMatch: "full" },
            { path: "", component: HomePageComponent },

        ]

    },
    { path: 'product/:id', component: ProductDetailComponent },

    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'cart', component: ShoppingCartComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'my-order', component: MyOrderComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
