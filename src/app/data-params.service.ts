import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataParamsService {

  private _student = new BehaviorSubject<Student>(null);
  // public student:Student;
  set student(value:Student) {
    this._student.next(value);
  }

  constructor() { }

  getCurrentStudent() {
    return this._student;
  }
}
