import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
import {Router,ActivatedRoute} from '@angular/router';
import {Student} from '../studen';
@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

id:number;
student: Student;

  constructor(private studentService:StudentService,private router:Router,private route:ActivatedRoute ) { }

  ngOnInit(): void {
    this.student=new Student();
    this.id = this.route.snapshot.params['id'];

    this.studentService.getone(this.id)
    .subscribe(data=>{
      console.log(data);
      this.student=data;
    })
   
  }

  updateStudent(){
    this.studentService.updateStudent(this.id,this.student)
    .subscribe(data=>{
      console.log(data);
      this.student=new Student();
    })
  }

  onSubmit(){
    this.updateStudent();
  }

  back(){
    this.router.navigate(['/studentss']);
  }
}
