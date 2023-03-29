import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/prime-number.store';
import { Observable, tap } from 'rxjs';
import { getCounter, getFavorites } from '../store/prime-number.selectors';
import { PrimeActions } from '../store/Actions';

@Component({
  selector: 'app-prime-view',
  templateUrl: './prime-view.component.html',
  styleUrls: ['./prime-view.component.css']
})
export class PrimeViewComponent implements OnInit {

  counter$: Observable<number> | undefined;
  favorites$: Observable<number[]> | undefined;
  counterValue: number = 0;
  favorites: number[] = [];
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.counter$ = this.store.select(getCounter);
    this.counter$.subscribe((counter) => this.counterValue = counter);  
    this.favorites$ = this.store.select(getFavorites);
    this.favorites$.subscribe((favorites) => this.favorites = favorites);
  }

  isPrime(): boolean {
    let value = this.counterValue;
    if (value <= 1) {
      return false;
    }
    if (value <= 3) {
      return true;
    }

    for (let i = 2; i < Math.sqrt(value); i++) {
      if ((value % i) == 0) {
        return false;
      }
    }
    return true;
  }

  isInFavoritePrimes(counter: number): boolean {
    return this.favorites.indexOf(counter) == -1;
  }

  onAddToFavorites() {
    this.store.dispatch(PrimeActions.addToFavorites());
  }

  onRemoveFromFavorites() {
    this.store.dispatch(PrimeActions.removeFromFavorites());
  }
}
