import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { BehaviorSubject } from 'rxjs';
import { Assignment } from './assignment.model';

@Injectable({
  providedIn: 'root'
})
export class DataParamsService {

  private _student = new BehaviorSubject<Student>(null);
  set student(value:Student) {
    this._student.next(value);
  }

  private _assignment = new BehaviorSubject<Assignment>(null);
  set assignment(value:Assignment) {
    this._assignment.next(value);
  }

  constructor() { }

  getCurrentStudent() {
    return this._student;
  }

  getCurrentAssignment() {
    return this._assignment;
  }
}
