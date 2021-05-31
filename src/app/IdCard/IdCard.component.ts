import { Component, OnInit } from '@angular/core';
import {Member} from './../Member';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-IdCard',
  templateUrl: './IdCard.component.html',
  styleUrls: ['./IdCard.component.css']
})
export class IdCardComponent implements OnInit {

  members: Member[] =[];
    selectedMember: Member = { id :0  , name: "",dateNaissance:"" ,password:"",email : "" , departement: "" , Poste :""}
    constructor(private apiService: ApiService) {
      this.apiService.readMembers().subscribe((members: Member[])=>{
      this.members=members;
      console.log(this.members);
    }) }


  ngOnInit() {
  }

}
