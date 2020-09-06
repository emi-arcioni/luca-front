import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Student } from './student.model';
import { classToPlain, plainToClass } from "class-transformer";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Assignment } from './assignment.model';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(
    private http: HttpClient
  ) { }

  callStudents(page?:number, q?:string):Observable<Student[]> {
    if (!page) page = 1;
    let url = '/api/students?page=' + page.toString();
    if (q) url += '&q=' + q;

    return this.http.get<Student[]>(url).pipe(map(data => {
      return plainToClass(Student, data);
    }));
  }

  callAssignments():Observable<Assignment[]> {
    let url = '/api/assignments';
    return this.http.get<Assignment[]>(url).pipe(map(data => {
      return plainToClass(Assignment, data);
    }));
  }
}
