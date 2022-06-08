import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/department.service';
import { Department } from 'src/app/_model/department.model';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  depts:Department[] = []
  constructor(public deptsList:DepartmentService) { 
  }

  ngOnInit(): void {
    this.depts = this.deptsList.getAllDepartments()
  }

}
