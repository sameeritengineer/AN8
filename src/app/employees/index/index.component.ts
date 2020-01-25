import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EmployeeComponent, {
      width: '800px'
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  }

}
