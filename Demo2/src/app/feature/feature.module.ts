import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student.component';
import { DepartmentComponent } from './department/department.component';



@NgModule({
  declarations: [
    StudentComponent,
    DepartmentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [StudentComponent, DepartmentComponent]
})
export class FeatureModule { }
