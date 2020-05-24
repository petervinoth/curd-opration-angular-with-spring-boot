import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
import {Student} from '../studen';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
 
  constructor(private studentService:StudentService,private router:Router ){}

  student:Student=new Student();
  
  newEmployee(): void {

    this.student = new Student();
  }
  onSubmit(form:NgForm):void{
    console.log(form.value);
    this.studentService.create(form.value).subscribe(resp=>{
      console.log(resp);
      form.resetForm();
    
     
      
    })
  }


  ngOnInit(): void {
  }

}
