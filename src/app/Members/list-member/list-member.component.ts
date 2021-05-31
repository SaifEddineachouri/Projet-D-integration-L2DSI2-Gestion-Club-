import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Member } from '../../Member';

@Component({
  selector: 'app-list-member',
  templateUrl: './list-member.component.html',
  styleUrls: ['./list-member.component.css']
})
export class ListMemberComponent implements OnInit {

    members: Member[] =[];
    selectedMember: Member = { id :0  , name: "",dateNaissance:"" ,password:"",email : "" , departement: "" , Poste :""}
    constructor(private apiService: ApiService) {
      this.apiService.readMembers().subscribe((members: Member[])=>{
      this.members=members;
      console.log(this.members);
    }) }
    ngOnInit()
    {
    }
    createOrUpdateMember(form : any){
      form.value.id = this.selectedMember.id;
      form.value.name = this.selectedMember.name;
      form.value.dateNaissance=this.selectedMember.dateNaissance;
      form.value.password = this.selectedMember.password;
      form.value.email =  this.selectedMember.email;
      form.value.departement = this.selectedMember.departement;
      form.value.poste =  this.selectedMember.Poste;
      

      if(this.selectedMember && this.selectedMember.id){
        if (confirm("Etes-vous sûr que vous voulez Modifier  Ce Membre ?")){
        this.apiService.updateMember(form.value).subscribe((member: Member)=>{
        console.log("Member updated" , member);
        this.apiService.readMembers().subscribe((members: Member[])=>{
          this.members = members;
        })
      });
    }
  }
    else{
      if (confirm("Etes-vous sûr que vous voulez Creer Un Membre ?")){
      this.apiService.CreateMember(form.value).subscribe((member: Member)=>{
        console.log("Member created, ", member);
        this.apiService.readMembers().subscribe((members: Member[])=>{
          this.members = members;
        })
      });
    }
  }
}

  selectMember(member: Member){
    this.selectedMember = member;
  }
  
  deleteMember(id:any){
    if (confirm("Etes-vous sûr que vous voulez supprimer Cette Membre ?")){
    this.apiService.deleteMember(id).subscribe((member: Member)=>{
      console.log("Member deleted, ", member);
      this.apiService.readMembers().subscribe((members: Member[])=>{
        this.members = members;
      })
    });
  }
  }
}