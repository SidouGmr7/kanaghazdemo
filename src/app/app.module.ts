import { PagesComponent } from './pages/pages.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { ServiceModule } from './Services/service.module';
import { NavbarComponent } from './Plugin/navbar/navbar.component';
import { SidenavComponent } from './Plugin/sidenav/sidenav.component';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment.prod';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireModule } from '@angular/fire/compat';
import {ButtonModule} from 'primeng/button';
import { HomeComponent } from './home/home.component';
import { InputTextModule } from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {RadioButtonModule} from 'primeng/radiobutton';
import {DialogModule} from 'primeng/dialog';
import {TableModule} from 'primeng/table';
import {PasswordModule} from 'primeng/password';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddEmployeeComponent } from './pages/employee/add-employee/add-employee.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { UpdateEmployeeComponent } from './pages/employee/update-employee/update-employee.component';
import { ProductsComponent } from './pages/products/products.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MaterielComponent } from './pages/materiel/materiel.component';
import {CalendarModule} from 'primeng/calendar';
import { AddMaterielComponent } from './dialog/add-materiel/add-materiel.component';
import { ListusersComponent } from './dialog/listusers/listusers.component';
import { UserInfoComponent } from './dialog/user-info/user-info.component';
import {InputNumberModule} from 'primeng/inputnumber';








@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    NavbarComponent,
    SidenavComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ListusersComponent,
    AdminComponent,
    EmployeeComponent,
    ProductsComponent,
    StatisticsComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    DashboardComponent,
    PageNotFoundComponent,
    AddMaterielComponent,
    MaterielComponent,
    UserInfoComponent,

      ],
  imports: [
    CommonModule,
    ServiceModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatToolbarModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatIconModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    ButtonModule,
    InputTextModule,
    DropdownModule,
    RadioButtonModule,
    DialogModule,
    TableModule,
    PasswordModule,
    CalendarModule,
    InputNumberModule

  ],
  exports : [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
