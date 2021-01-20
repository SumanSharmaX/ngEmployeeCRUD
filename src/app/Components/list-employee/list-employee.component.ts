import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/Employee';
import { EmployeeService } from 'src/app/Services/employee.service';


@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
employees:Employee[];
  constructor(private EmployeeServices:EmployeeService) { }

  ngOnInit(): void {
    this.employees=this.EmployeeServices.getEmployees();
  }

}
