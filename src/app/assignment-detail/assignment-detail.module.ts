import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssignmentDetailPageRoutingModule } from './assignment-detail-routing.module';

import { AssignmentDetailPage } from './assignment-detail.page';

import { TrustUrlPipe } from '../trust-url.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssignmentDetailPageRoutingModule
  ],
  declarations: [AssignmentDetailPage, TrustUrlPipe],
  exports: [TrustUrlPipe]
})
export class AssignmentDetailPageModule {}
