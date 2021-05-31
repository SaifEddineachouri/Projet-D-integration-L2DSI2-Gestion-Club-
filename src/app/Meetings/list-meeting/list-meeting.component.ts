import { OnInit } from "@angular/core";
import { ApiService } from "src/app/api.service";
import { Meeting } from "src/app/Meeting";
import { Component} from '@angular/core';



@Component({
  selector: 'app-list-meeting',
  templateUrl: './list-meeting.component.html',
  styleUrls: ['./list-meeting.component.css']
})

export class ListMeetingComponent implements OnInit {
	meetings: Meeting[]=[];
  action : string="";
	selectedMeeting: Meeting = { id : 0 , titre: "", Date_Deb : "" , Date_Fin :  ""}
	constructor(private apiService: ApiService) {
		this.apiService.readMeetings().subscribe((meetings: Meeting[])=>{
		this.meetings = meetings;
		console.log(this.meetings);
	}) }


	ngOnInit()
	{
	}

	
	CreateOrUpdateMeeting(form :any){
		form.value.id = this.selectedMeeting.id;
		form.value.titre = this.selectedMeeting.titre;
    	form.value.Date_Deb =  this.selectedMeeting.Date_Deb;
    	form.value.Date_Fin = this.selectedMeeting.Date_Fin;

		if(this.selectedMeeting && this.selectedMeeting.id){
			if (confirm("Etes-vous sûr que vous voulez Modifier  Cette Meeting ?")){
			this.apiService.updateMeeting(form.value).subscribe((meeting: Meeting)=>{
			console.log("Meeting updated" , meeting);
			this.apiService.readMeetings().subscribe((meetings: Meeting[])=>{
				this.meetings = meetings;
			})
		});
	}
}
	else{
		if (confirm("Etes-vous sûr que vous voulez Creer Un Meeting ?")){
		this.apiService.CreateMeeting(form.value).subscribe((meeting: Meeting)=>{
			console.log("Meeting created ", meeting);
			this.apiService.readMeetings().subscribe((meetings: Meeting[])=>{
				this.meetings = meetings;
			})
		});
	}
}
}

selectMeeting(meeting: Meeting){
	this.selectedMeeting = meeting;
}

deleteMeeting(id : number){
	if (confirm("Etes-vous sûr que vous voulez supprimer Cette Meeting ?")){
	this.apiService.deleteMeeting(id).subscribe((meeting: Meeting)=>{
		console.log("Meeting deleted, ", meeting);
		this.apiService.readMeetings().subscribe((meetings: Meeting[])=>{
			this.meetings = meetings;
		})
	});
}
}
}