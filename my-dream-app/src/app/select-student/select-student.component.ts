import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
import {Router,ActivatedRoute} from '@angular/router';
import { Student } from '../studen';

@Component({
  selector: 'app-select-student',
  templateUrl: './select-student.component.html',
  styleUrls: ['./select-student.component.css']
})
export class SelectStudentComponent implements OnInit {

  id:number;
  student:Student;
  constructor(private studentService:StudentService , private router :Router ,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.student=new Student();
    this.id = this.route.snapshot.params['id'];

    this.studentService.getone(this.id)
    .subscribe(data=>{
      console.log(data);
      this.student=data;
    })
  }

  list(){
    this.router.navigate(['/studentss']);
  }
  

  }



