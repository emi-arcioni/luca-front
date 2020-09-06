import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../requests.service';
import { Assignment } from '../assignment.model';
import { DataParamsService } from '../data-params.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {

  public assignments:Assignment[];

  constructor(
    private requests: RequestsService,
    private navController: NavController,
    private data: DataParamsService
  ) { }

  ngOnInit() {
    this.requests.callAssignments().subscribe(response => {
      this.assignments = response;
    });
  }

  gotoDetail(item) {
    this.data.assignment = item;
    this.navController.navigateForward("/assignment-detail");
  }

}
