import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Activity, AppState } from '../store/prime-number.store';
import { Observable } from 'rxjs';
import { getActivities } from '../store/prime-number.selectors';

@Component({
  selector: 'app-activity-feed',
  templateUrl: './activity-feed.component.html',
  styleUrls: ['./activity-feed.component.css']
})
export class ActivityFeedComponent implements OnInit {

  activityFeeds$: Observable<Activity[]> | undefined
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.activityFeeds$ = this.store.select(getActivities)
  }

}
