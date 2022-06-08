import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/department.service';
import { Department } from 'src/app/_model/department.model';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {

  newDept:Department=new Department(0, "", "")
  constructor(public dept:DepartmentService) {}
  addNew(){
    this.dept.addNewDepartment(this.newDept)
  }
  ngOnInit(): void {
  }

}
