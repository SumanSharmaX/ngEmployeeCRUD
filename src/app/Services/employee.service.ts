import { Injectable } from '@angular/core';
import { Employee } from '../Models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
   employees:Employee[]=[{
    id:1,name:"Suman",gender:"male",email:"suman@gmail.com",phone:"987678987",contactPreference:"Email",dateOfBirth:new Date('12/12/1999'),department:"HR",isActive:true,photoPath:"../../../assets/Photos/man-300x300.png"
  },{
    id:2,name:"Suresh",gender:"male",email:"suresh@gmail.com",phone:"111178987",contactPreference:"Phone",dateOfBirth:new Date('01/11/1999'),department:"Sales",isActive:true,photoPath:"../../../assets/Photos/man-300x300.png"
  },{
    id:1,name:"Neha",gender:"Female",email:"neha@gmail.com",phone:"987611111",contactPreference:"Email",dateOfBirth:new Date('11/11/2000'),department:"Devloper",isActive:true,photoPath:"../../../assets/Photos/man-300x300.png"
  }
  ];
  constructor() { }
  getEmployees():Employee[] {
    return this.employees;
  }
  saveEmployee(emp :Employee){
    this.employees.push(emp);
  }
}
