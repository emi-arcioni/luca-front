import { Component, OnInit } from '@angular/core';
import { DataParamsService } from '../data-params.service';
import { Student } from '../student.model';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.page.html',
  styleUrls: ['./student-detail.page.scss'],
})
export class StudentDetailPage implements OnInit {

  public student:Student;
  private sub:Subscription;

  constructor(
    private data: DataParamsService,
    private navController: NavController,
  ) { 
    
  }

  ngOnInit() {
    if (this.sub) return;

    this.sub = this.data.getCurrentStudent().subscribe(student => {
      if (!student) {
        this.navController.navigateRoot('/tabs/students');
        return;
      }

      this.student = student;
    });
  }

}
