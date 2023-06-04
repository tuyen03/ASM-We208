import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { HomePageComponent } from './pages/home-page/home-page/home-page.component';
import { LayOutAdminComponent } from './layouts/Admin/lay-out-admin/lay-out-admin.component';
import { DashBoardComponent } from './pages/Admin/dash-board/dash-board.component';


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
            { path: "DashBoard", component: DashBoardComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
