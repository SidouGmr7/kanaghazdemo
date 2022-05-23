import { StatisticsComponent } from './pages/statistics/statistics.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { ProductsComponent } from './pages/products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';
import { MaterielComponent } from './pages/materiel/materiel.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home' , component: HomeComponent ,canActivate:[AuthGuard]},
  {path: 'admin' , component: AdminComponent,
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'employee' , component: EmployeeComponent},
      {path: 'statistics' , component: StatisticsComponent},
      {path: 'dashboard' , component: DashboardComponent}, 
      {path: 'products', component: ProductsComponent},
      {path: 'materiel', component: MaterielComponent},
      {path: '**', component: PageNotFoundComponent },

    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
