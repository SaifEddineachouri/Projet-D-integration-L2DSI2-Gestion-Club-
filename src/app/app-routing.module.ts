import { ListMeetingComponent } from './Meetings/list-meeting/list-meeting.component';
import { HeaderComponent } from './header/header.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/Dashboard.component';
import { AuthguardGuard } from './authguard.guard';
import { ListMemberComponent } from './Members/list-member/list-member.component';
import {ListEventsComponent} from './Events/list-Events/list-Events.component';
import{ ToDoListComponent } from './ToDoList/ToDoList/ToDoList.component';
import {IdCardComponent} from './IdCard/IdCard.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'registration', component: RegisterComponent },
  { path: 'Meetings', component: ListMeetingComponent },
  { path: 'Members', component: ListMemberComponent },
  { path: 'Events' , component : ListEventsComponent},
  { path: 'ToDoList' , component: ToDoListComponent},
  { path: 'IdCards' , component: IdCardComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthguardGuard] }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }