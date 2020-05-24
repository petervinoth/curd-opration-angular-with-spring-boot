import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
import {Student} from '../studen';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  studentlist:Student[]=[];
  course:String;

  constructor(private studentService:StudentService,private router:Router) { }

  ngOnInit(): void {
    this.GetAll();
  }

GetAll():void {

  this.studentService.getAll()
  .subscribe(resp => {
    console.log(resp);
    this.studentlist=resp;
  })
}

updateStuent(id:number){
  this.router.navigate(['update',id]);

}
deleteStudent(id:number){
  this.studentService.deleteStudent(id)
  .subscribe(data=>{
    console.log(data);
    this.gethome();

  })
}

gethome(){
  this.router.navigate(['/']);
}

deatils(id:number){
  this.router.navigate(['search',id]);
}

}

