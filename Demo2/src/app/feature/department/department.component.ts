import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  newDepartment = new Department(0, "", 0);
  currentDepartment = new Department(0, "", 0);
  editDepartment = new Department(0, "", 0);
  add(){
    this.depts.push(new Department(this.newDepartment.id, this.newDepartment.name, this.newDepartment.capacity))
  }
  show(id:number){
    for(let i = 0; i < this.depts.length; i+=1){
      if(this.depts[i].id == id){
        this.currentDepartment.id = this.depts[i].id;
        this.currentDepartment.name = this.depts[i].name;
        this.currentDepartment.capacity = this.depts[i].capacity;
      }
    }
  }
  edit(id:number){
    for(let i = 0; i < this.depts.length; i+=1){
      if(this.depts[i].id == id){
        this.editDepartment.id = this.depts[i].id;
        this.editDepartment.name = this.depts[i].name;
        this.editDepartment.capacity = this.depts[i].capacity;
      }
    }
  }
  save(id:any){
    id = Number(id);
     for(let i = 0; i < this.depts.length; i+=1){
      if(this.depts[i].id == id){
        this.depts[i].id = this.editDepartment.id;
        this.depts[i].name = this.editDepartment.name;
        this.depts[i].capacity = this.editDepartment.capacity;
      }
    }
    this.editDepartment.id = 0;
    this.editDepartment.name = '';
    this.editDepartment.capacity = 0;
  }
  delete(id:number){
    for(let i = 0; i < this.depts.length; i+=1){
      if(this.depts[i].id == id){
        this.depts.splice(i, 1)
      }
    }
  }
  depts:Department[]=[
    new Department(1, "SE", 70),
    new Department(2, "CS", 40),
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
