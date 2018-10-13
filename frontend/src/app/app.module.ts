import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthenticationComponent } from './authentication/authentication.component';

import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AuthenticationService } from "./authentication.service";
import { DashboardService } from "./dashboard.service";
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  {path: '', component: AuthenticationComponent},
  {path: 'dashboard', component: DashboardComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [AuthenticationService, DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
