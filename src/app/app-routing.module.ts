import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ActivityFeedComponent } from './activity-feed/activity-feed.component';

const routes: Routes = [
  {path: "counter", component: CounterComponent},
  {path: "favorites", component: FavoritesComponent},
  {path: "activity-feed", component: ActivityFeedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
