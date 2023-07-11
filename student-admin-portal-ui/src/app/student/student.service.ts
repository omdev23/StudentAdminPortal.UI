import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/api-models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseApiUrl = "https://localhost:44338";
  constructor(private httpclient: HttpClient) { }

  getStudents(): Observable<Student[]>{
      return this.httpclient.get<Student[]>(this.baseApiUrl + "/student");
  }
}
