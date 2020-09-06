import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Student } from './student.model';
import { classToPlain, plainToClass } from "class-transformer";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(
    private http: HttpClient
  ) { }

  callStudents(page:number):Observable<Student[]> {
    if (!page) page = 1;

    let url = '/api/students?page=' + page.toString();
    return this.http.get<Student[]>(url).pipe(map(data => {
      return plainToClass(Student, data);
    }));
  }
}
