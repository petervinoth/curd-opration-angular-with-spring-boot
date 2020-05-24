import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import {AppRoutingModule} from  './app-routing.module';
import { AppComponent } from './app.component';
import { StudentService } from './student.service';
import { CreateStudentComponent } from './create-student/create-student.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { SelectStudentComponent } from './select-student/select-student.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateStudentComponent,
    ListStudentComponent,
    UpdateStudentComponent,
    SelectStudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
