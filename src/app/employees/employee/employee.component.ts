import { Component, OnInit ,Inject} from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { IndexComponent } from '../index/index.component';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private service:EmployeeService,public dialogRef: MatDialogRef<IndexComponent>,@Inject(MAT_DIALOG_DATA) public data: any){ }

  ngOnInit() {
  }

  departments = [
    {id:1,name:'Dep 1'},
    {id:2,name:'Dep 2'},
    {id:3,name:'Dep 3'}
  ];

  onClear(){
    this.service.form.reset();
    this.service.initializeFormGroup();
  }
}
