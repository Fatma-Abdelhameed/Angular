import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student.component';
import { DepartmentComponent } from './department/department.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StudentComponent,
    DepartmentComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [StudentComponent, DepartmentComponent]
})
export class FeatureModule { }
