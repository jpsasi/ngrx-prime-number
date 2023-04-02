import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Activity, FavoritesState } from '../favorites/store/favorites.state';
import { getActivities } from '../favorites/store/favorites.selector';

@Component({
  selector: 'app-activity-feed',
  templateUrl: './activity-feed.component.html',
  styleUrls: ['./activity-feed.component.css']
})
export class ActivityFeedComponent implements OnInit {

  activityFeeds$: Observable<Activity[]> | undefined
  constructor(private store: Store<FavoritesState>) {}

  ngOnInit(): void {
    this.activityFeeds$ = this.store.select(getActivities)
  }

}
