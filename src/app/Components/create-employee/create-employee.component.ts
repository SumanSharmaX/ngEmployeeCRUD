import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Department } from 'src/app/Models/Department';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm:FormGroup;
  Department:Department[]=[
  {id:1,name:"HR"},
  {id:1,name:"Sales"},
  {id:1,name:"Engineer"},
  {id:1,name:"Accounant"}
];
  constructor(private fb:FormBuilder) { }
  ngOnInit(): void {
    this.employeeForm=this.fb.group({
      name:['',Validators.required],
      dateOfBirth:['',Validators.required],
      department:['',Validators.required],
      isActive:['',Validators.required],
      gender:['',Validators.required],
      email:[''],
      phone:[''],
      contactPreference:['',Validators.required],
      photoPath:['../../../assets/Photos/man-300x300.png'],
    })
    
  }
  addEmployee(){
    console.log("1111111111111111111111");
    console.log(this.employeeForm.value);
    
  }
}

