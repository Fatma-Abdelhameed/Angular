import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { DepartmentService } from 'src/app/department.service';

@Component({
  selector: 'app-delete-department',
  templateUrl: './delete-department.component.html',
  styleUrls: ['./delete-department.component.css']
})
export class DeleteDepartmentComponent implements OnInit {
  @Input() deptID=0;
  constructor(public deptsList:DepartmentService) { }
  delete(){
    this.deptsList.deleteDepartment(this.deptID)
  }
  ngOnInit(): void {
  }

}
