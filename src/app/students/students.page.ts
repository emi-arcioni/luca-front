import { Component, ViewChild } from '@angular/core';
import { RequestsService } from '../requests.service';
import { Student } from '../student.model';
import { Subscription } from 'rxjs';
import { IonInfiniteScroll, NavController } from '@ionic/angular';
import { DataParamsService } from '../data-params.service';

@Component({
  selector: 'app-students',
  templateUrl: 'students.page.html',
  styleUrls: ['students.page.scss']
})
export class StudentsPage {

  public students:Student[];
  private page:number = 1;
  private page_copy:number;
  private query_string:string;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;


  constructor(
    private requests: RequestsService,
    private navController: NavController,
    private data: DataParamsService
  ) {
  }

  ngOnInit() {
    this.requests.callStudents(this.page).subscribe(response => {
      this.students = response;
    });
  }

  myHeaderFn(record, recordIndex, records) {
    if (records[recordIndex - 1]) {
      if (records[recordIndex - 1].name.last[0] != records[recordIndex].name.last[0]) {
        return record.name.last[0];
      }
    } else {
      return record.name.last[0];
    }
    return null;
  }

  loadData(event?) {
    this.page++;
    this.requests.callStudents(this.page, this.query_string).subscribe(response => {
      if (response.length) {
        this.students = this.students.concat(response);
      } else {
        this.infiniteScroll.disabled = true;
      }
      if (event) event.target.complete();
    });
  }

  gotoDetail(item) {
    this.data.student = item;
    this.navController.navigateForward("/student-detail");
  }

  search(event) {
    this.query_string = event.detail.value;
    if (this.query_string) {
      this.page_copy = this.page;
      this.page = 0;
    } else {
      this.page = this.page_copy - 1;
    }
    this.students = [];
    this.infiniteScroll.disabled = false;
    this.loadData();
  }
}