import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from './studen';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private readonly URL:string="http://localhost:8090/api/student";

  constructor(private http:HttpClient) { }

  create(data:Student):Observable<Student>{
    return this.http.post<Student>(this.URL,data);
  }

  getAll():Observable<Student[]>{
    return this.http.get<Student[]>(this.URL);
  }

 getone(id:number):Observable<Student>{
   return this.http.get<Student>(this.URL + "/" +id);
 }

 updateStudent(id:number,value:any):Observable<Student>{
   return this.http.put<Student>(this.URL + "/" + id,value);
 }

 deleteStudent(id:number):Observable<Student>{
   return this.http.delete<Student>(this.URL + "/" +id);
 }

 search(course:String):Observable<any>{
   return this.http.get<Student>(this.URL+ " "+course);
 }
}
