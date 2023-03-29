import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/prime-number.store';
import { PrimeActions } from './store/Actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngrx-prime-number';

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    const appState = localStorage.getItem('store');
    if (appState) {
      this.store.dispatch(PrimeActions.loadedStore({appState: JSON.parse(appState)}));
    }
  }
}
