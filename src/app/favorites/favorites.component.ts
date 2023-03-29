import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/prime-number.store';
import { Observable, tap } from 'rxjs';
import { getAppState, getFavorites } from '../store/prime-number.selectors';
import { PrimeActions } from '../store/Actions';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favorites$: Observable<number[]> | undefined;
  appState$: Observable<AppState> | undefined;
  appState: AppState | undefined;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {  
    this.favorites$ = this.store.select(getFavorites);
    this.appState$ = this.store.select(getAppState);
    this.appState$.subscribe((appState) => {
      this.appState = appState;
      console.log('appState in onInit subscribe', this.appState);
    })
    this.appState$.pipe(
      tap((appState) => {
        this.appState = appState;
        console.log('appState in onInit', this.appState);
    })
    )
  }

  onDeleteFromFavorites(index: number) {
    this.store.dispatch(PrimeActions.deleteFromFavorites({index: index}));
  }

  onSave() {
    console.log('onSave');
    this.store.dispatch(PrimeActions.saveStore({appState: this.appState!}));
  }

  onLoad() {
    this.store.dispatch(PrimeActions.loadState());
  }
}
