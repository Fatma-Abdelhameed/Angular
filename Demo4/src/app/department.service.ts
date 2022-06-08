import { Injectable } from '@angular/core';
import { Department } from './_model/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private deptList:Department[]=[
    new Department(1, "OS", "Alex"),
    new Department(2, "AI", "Smart"),
    new Department(3, "PD", "Mansoura"),
  ]
  constructor() { }
  getAllDepartments(){
    return this.deptList;
  }
  addNewDepartment(newDept:Department){
    this.deptList.push(new Department(newDept._id, newDept.name, newDept.location))
  }
  deleteDepartment(deptId:number){
    for (let i = 0; i < this.deptList.length; i++) {
      if(this.deptList[i]._id == deptId){
        this.deptList.splice(i, 1)
      }
    }
  }
}
