import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/prime-number.store';
import { PrimeActions } from './store/Actions';
import { FavoritesActions } from './favorites/store/favorites.actions';
import { CounterActions } from './counter/store/counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngrx-prime-number';

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(CounterActions.loadcounter());
    this.store.dispatch(FavoritesActions.loadfavorites());
    console.log('load events dispatched');
  }
}
