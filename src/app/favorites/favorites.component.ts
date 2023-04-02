import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { PrimeActions } from '../store/Actions';
import { FavoritesState } from './store/favorites.state';
import { getFavorites, getFavoritesState } from './store/favorites.selector';
import { FavoritesActions } from './store/favorites.actions';
import { CounterActions } from '../counter/store/counter.actions';
import { AppState } from '../store/prime-number.store';
import { getCounter } from '../counter/store/counter.selector';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit, OnDestroy {

  favorites$: Observable<number[]> | undefined;
  counter: number = 0;
  favoritesState: FavoritesState | undefined;
  subscription: Subscription | undefined;
  subscription1: Subscription | undefined;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {  
    this.favorites$ = this.store.select(getFavorites);
    this.subscription = this.store.select(getFavoritesState).subscribe(
      (state) => this.favoritesState = state
    );
    this.subscription1 = this.store.select(getCounter).subscribe((counter) => this.counter = counter);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe(); 
    this.subscription1?.unsubscribe();
  }

  onDeleteFromFavorites(index: number) {
    this.store.dispatch(FavoritesActions.deletefromfavorites({index: index}));
  }

  onSave() {
    this.store.dispatch(FavoritesActions.savefavorites({state: this.favoritesState!}));
    this.store.dispatch(CounterActions.savecounter({state: {counter:this.counter}}));
  }

  onLoad() {
    this.store.dispatch(FavoritesActions.loadfavorites());
    this.store.dispatch(CounterActions.loadcounter());
  }
}
