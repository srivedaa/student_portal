import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StddetailsComponent } from './stddetails/stddetails.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HeadingComponent } from './heading/heading.component';

const appRoutes: Routes = [
  {
    path:'',component:DashboardComponent
  },
  {
    path:'dashboard',component:DashboardComponent
  },
  {path:'stdDetail/:id',component:StddetailsComponent},
  {path:'survey',component:StudentComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StddetailsComponent,
    DashboardComponent,
    HeaderComponent,
    HeadingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true}),
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
