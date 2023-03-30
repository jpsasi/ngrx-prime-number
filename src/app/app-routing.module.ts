import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ActivityFeedComponent } from './activity-feed/activity-feed.component';
import { PrimeViewComponent } from './prime-view/prime-view.component';

const routes: Routes = [
  {path: "counter", loadChildren: () => import('./counter/counter.module').then(
    (counter) => counter.CounterModule
  )},
  {path: "favorites", 
  loadChildren: () => import('./favorites/favorites.module').then(
    (favorites) => favorites.FavoritesModule)
  },
  {path: "activity-feed", 
  loadChildren: () => import('./activity-feed/activity-feed.module').then(
    (activityFeed) => activityFeed.ActivityFeedModule
  )},
  {path: "prime-view", 
  loadChildren: () => import('./prime-view/prime-view.module').then(
    (primeView) => primeView.PrimeViewModule), 
  },
  { path: 'prime-view', loadChildren: () => import('./prime-view/prime-view.module').then(m => m.PrimeViewModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
