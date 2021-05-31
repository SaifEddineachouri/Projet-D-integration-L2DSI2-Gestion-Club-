import { ListMeetingComponent } from './Meetings/list-meeting/list-meeting.component';
import { ListMemberComponent } from './Members/list-member/list-member.component';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/Dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ListEventsComponent } from './Events/list-Events/list-Events.component';
import { ToDoListComponent } from './ToDoList/ToDoList/ToDoList.component';
import {IdCardComponent} from  './IdCard/IdCard.component';

const appRoutes: Routes = [
  {
    path: 'dashboard', component: HeaderComponent,
    children: [
      { path: 'home', component: DashboardComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'Meetings', component: ListMeetingComponent },
  { path: 'Members' ,  component:  ListMemberComponent},
  { path: 'Events' ,  component:  ListEventsComponent},
  { path: 'ToDoList', component:  ListEventsComponent},
  { path: 'IdCards', component:  IdCardComponent},
  { path: '**', redirectTo: '/login', pathMatch: 'full' }


];


@NgModule({
  declarations: [	
    AppComponent,
    LoginComponent,
    HeaderComponent,
    DashboardComponent,
    HomeComponent,
    RegisterComponent,
    ListMeetingComponent,
    ListMemberComponent,
    ListEventsComponent,
    ToDoListComponent,
    IdCardComponent
   ],
  imports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
