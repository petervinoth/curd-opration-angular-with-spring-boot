import { NgModule } from "@angular/core";
import {Routes,RouterModule} from "@angular/router";
import {CreateStudentComponent} from './create-student/create-student.component';
import { ListStudentComponent } from './list-student/list-student.component';
import {UpdateStudentComponent} from './update-student/update-student.component';
import { SelectStudentComponent } from './select-student/select-student.component';
const routes:Routes=[
    { path: '', redirectTo: 'Student', pathMatch: 'full' },
    { path:'studentss',component:ListStudentComponent},
    { path:'add',component:CreateStudentComponent},
    { path: 'update/:id', component: UpdateStudentComponent },
    {path: 'search/:id',component:SelectStudentComponent},
  ];
  
  @NgModule({  
    imports: [RouterModule.forRoot(routes)],  
    exports: [RouterModule]  
  })  
  export class AppRoutingModule { }  