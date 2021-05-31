import { Component, OnInit } from '@angular/core';
import { ApiService } from "src/app/api.service";
import { Event } from "src/app/Event";

@Component({
  selector: 'app-list-Events',
  templateUrl: './list-Events.component.html',
  styleUrls: ['./list-Events.component.css']
})
export class ListEventsComponent implements OnInit {

  Events: Event[]=[];
  action : string="";
	selectedEvent: Event = { id : 0 , titre: "", Capacity : "" , Lieu :  "" , Date: ""}

	constructor(private apiService: ApiService) {
		this.apiService.readEvents().subscribe((events: Event[])=>{
		this.Events = events;
		console.log(this.Events);
	}) }


	ngOnInit()
	{
	}

	
	CreateOrUpdateEvent(form :any){
		  form.value.id = this.selectedEvent.id;
		  form.value.titre = this.selectedEvent.titre;
    	form.value.Capacity =  this.selectedEvent.Capacity;
    	form.value.Lieu = this.selectedEvent.Lieu;
      form.value.Date= this.selectedEvent.Date;

		if(this.selectedEvent && this.selectedEvent.id){
			if (confirm("Etes-vous sûr que vous voulez Modifier  Cette Evenement ?")){
			this.apiService.updateEvent(form.value).subscribe((event: Event)=>{
			console.log("Event updated" , event);
			this.apiService.readEvents().subscribe((events: Event[])=>{
				this.Events = events;
			})
		});
	}
}
	else{
		if (confirm("Etes-vous sûr que vous voulez Creer Un Evenement ?")){
		this.apiService.CreateEvent(form.value).subscribe((event: Event)=>{
			console.log("Event created ", event);
			this.apiService.readEvents().subscribe((events: Event[])=>{
				this.Events = events;
			})
		});
	}
}
}

selectEvent(event: Event){
	this.selectedEvent = event;
}

deleteEvent(id : number){
	if (confirm("Etes-vous sûr que vous voulez supprimer Cette Evenement ?")){
	this.apiService.deleteEvent(id).subscribe((event: Event)=>{
		console.log("Event deleted, ", event);
		this.apiService.readEvents().subscribe((events: Event[])=>{
			this.Events = events;
		})
	});
}

}


}


	