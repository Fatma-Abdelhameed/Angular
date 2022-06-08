import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentListComponent } from './department-list/department-list.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DeleteDepartmentComponent } from './delete-department/delete-department.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DepartmentListComponent,
    AddDepartmentComponent,
    DepartmentDetailsComponent,
    DeleteDepartmentComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[
    DepartmentListComponent,
    AddDepartmentComponent,
    DepartmentDetailsComponent,
    DeleteDepartmentComponent
  ]
})
export class DepartmentModule { }
