import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ListToDo } from '../../ListToDo';

@Component({
  selector: 'app-ToDoList',
  templateUrl: './ToDoList.component.html',
  styleUrls: ['./ToDoList.component.css']
})
export class ToDoListComponent implements OnInit {


    ListToDo: ListToDo[] =[];
    selectedActivite: ListToDo = { id :0  , titre: "", DatePj : ""}
    constructor(private apiService: ApiService) {
      this.apiService.readActivite().subscribe((ListToDo: ListToDo[])=>{
      this.ListToDo=ListToDo;
      console.log(this.ListToDo);
    }) }
    ngOnInit()
    {
    }
    createOrUpdateActivite(form : any){
      form.value.id = this.selectedActivite.id;
      form.value.titre = this.selectedActivite.titre;
      form.value.DatePj = this.selectedActivite.DatePj;
      

      if(this.selectedActivite && this.selectedActivite.id){
        if (confirm("Etes-vous sûr que vous voulez Modifier  Cette Activite ?")){
        this.apiService.updateActivite(form.value).subscribe((listToDo: ListToDo)=>{
        console.log("Activite  updated" , listToDo);
        this.apiService.readActivite().subscribe((ListToDo: ListToDo[])=>{
          this.ListToDo = ListToDo;
        })
      });
    }
  }
    else{
      if (confirm("Etes-vous sûr que vous voulez Creer  Une Activite ?")){
      this.apiService.CreateActivite(form.value).subscribe((ListToDo: ListToDo)=>{
        console.log("Activite created, ", ListToDo);
        this.apiService.readActivite().subscribe((listToDo: ListToDo[])=>{
          this.ListToDo = listToDo;
        })
      });
    }
  }
}
  selectActivite(listToDo: ListToDo){
    this.selectedActivite = listToDo;
  }
  
  deleteActivite(id:any){
    if (confirm("Etes-vous sûr que vous voulez supprimer Cette Activite ?")){
    this.apiService.deleteActivite(id).subscribe((listToDo:ListToDo)=>{
      console.log("Activite deleted, ", listToDo);
      this.apiService.readActivite().subscribe((listToDo: ListToDo[])=>{
        this.ListToDo = listToDo;
      })
    });
  }
  }
}
