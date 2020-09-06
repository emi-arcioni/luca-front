import { Component, OnInit } from '@angular/core';
import { Assignment } from '../assignment.model';
import { Subscription } from 'rxjs';
import { DataParamsService } from '../data-params.service';
import { NavController } from '@ionic/angular';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { Video } from '../video.model';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.page.html',
  styleUrls: ['./assignment-detail.page.scss'],
})
export class AssignmentDetailPage implements OnInit {

  public assignment:Assignment;
  private sub:Subscription;

  constructor(
    private data: DataParamsService,
    private navController: NavController,
    private videoPlayer: VideoPlayer
  ) { }

  ngOnInit() {
    if (this.sub) this.sub.unsubscribe();

    this.sub = this.data.getCurrentAssignment().subscribe(assignment => {
      if (!assignment) {
        this.navController.navigateRoot('/tabs/videos');
        return;
      }

      this.assignment = assignment;
    });
  }

  playVideo(video:Video) {
    this.videoPlayer.play(video.url).then(() => {
      console.log('video completed');
    }).catch(err => {
      console.log(err);
    });
  }

}