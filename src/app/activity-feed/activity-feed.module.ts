import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityFeedRoutingModule } from './activity-feed-routing.module';
import { ActivityFeedComponent } from './activity-feed.component';

@NgModule({
  declarations: [
    ActivityFeedComponent
  ],
  imports: [
    CommonModule,
    ActivityFeedRoutingModule
  ]
})
export class ActivityFeedModule { }
