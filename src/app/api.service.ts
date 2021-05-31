import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';
import {Member } from './Member';
import { Observable } from 'rxjs';
import {Meeting} from './Meeting';
import {Event} from  './Event';
import { ListToDo } from './ListToDo';
@Injectable({
  providedIn: 'root'
})

export class ApiService {
  redirectUrl: string = '';
  baseUrl: string = "http://localhost/GestionClub/src/app/php";
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient: HttpClient) { }
  public userlogin(username: String, password: String) {
    alert(username)
    return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
      .pipe(map(Users => {
        this.setToken(Users[0].name);
        this.getLoggedInName.emit(true);
        return Users;
      }));
  }
  public userregistration(name:'',email:'',pwd:'') {
	return this.httpClient.post<any>(this.baseUrl + '/register.php', { name,email, pwd })
	.pipe(map(Users => {
	return Users;
	}));
	}

  //token
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  deleteToken() {
    localStorage.removeItem('token');
  }
  isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true
    }
    return false;
  }


  PHP_API_SERVER = "http://localhost/GestionClub/src/app/php";
	
	readMembers(): Observable<Member[]>{
		return this.httpClient.get<Member[]>(`${this.PHP_API_SERVER}/ListMember.php`);
	}
	CreateMember(member: Member): Observable<Member>{
		return this.httpClient.post<Member>(`${this.PHP_API_SERVER}/CreateMember.php`, member);
	}
	updateMember(member: Member){
		return this.httpClient.put<Member>(`${this.PHP_API_SERVER}/EditMember.php`, member);
	}
	deleteMember(id: number){
		return this.httpClient.delete<Member>(`${this.PHP_API_SERVER}/DeleteMember.php/?id=${id}`);
	}

 
  PHP_API_SERVER2 = "http://localhost/GestionClub/src/app/php";

	readMeetings(): Observable<Meeting[]>{

		return this.httpClient.get<Meeting[]>(`${this.PHP_API_SERVER2}/ListMeeting.php`);
	}
	CreateMeeting(meeting: Meeting): Observable<Meeting>{
		return this.httpClient.post<Meeting>(`${this.PHP_API_SERVER2}/CreateMeeting.php`, meeting);
	}
	updateMeeting(meeting: Meeting){
		return this.httpClient.put<Meeting>(`${this.PHP_API_SERVER2}/EditMeeting.php`, meeting);
	}
	deleteMeeting(id: number){
		return this.httpClient.delete<Meeting>(`${this.PHP_API_SERVER2}/DeleteMeeting.php/?id=${id}`);
	}


  PHP_API_SERVER3 = "http://localhost/GestionClub/src/app/php";
	
	readEvents(): Observable<Event[]>{
		return this.httpClient.get<Event[]>(`${this.PHP_API_SERVER3}/ListEvent.php`);
	}
	CreateEvent(event: Event): Observable<Event>{
		return this.httpClient.post<Event>(`${this.PHP_API_SERVER3}/CreateEvent.php`, event);
	}
	updateEvent(event: Event){
		return this.httpClient.put<Event>(`${this.PHP_API_SERVER3}/EditEvent.php`, event);
	}
	deleteEvent(id: number){
		return this.httpClient.delete<Event>(`${this.PHP_API_SERVER3}/DeleteEvent.php/?id=${id}`);
	}


  PHP_API_SERVER4 = "http://localhost/GestionClub/src/app/php";
	
	readActivite(): Observable<ListToDo[]>{
		return this.httpClient.get<ListToDo[]>(`${this.PHP_API_SERVER4}/ListToDo.php`);
	}
	CreateActivite(act: ListToDo): Observable<ListToDo>{
		return this.httpClient.post<ListToDo>(`${this.PHP_API_SERVER4}/CreateListToDo.php`, act);
	}
	updateActivite(act: ListToDo){
		return this.httpClient.put<ListToDo>(`${this.PHP_API_SERVER4}/EditListToDo.php`, act);
	}
	deleteActivite(id: number){
		return this.httpClient.delete<ListToDo>(`${this.PHP_API_SERVER4}/DeleteListToDo.php/?id=${id}`);
	}

}