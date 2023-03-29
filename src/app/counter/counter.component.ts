import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/prime-number.store';
import { Observable } from 'rxjs';
import { getCounter } from '../store/prime-number.selectors';
import { PrimeActions } from '../store/Actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter$: Observable<number> | undefined;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.counter$ = this.store.select(getCounter);    
  }

  onIncrement() {
    console.log('onIncrement');
    this.store.dispatch(PrimeActions.incrCounter());
  }

  onDecrement() {
    console.log('onDecrement');
    this.store.dispatch(PrimeActions.decrCounter());
  }

  onReset() {
    console.log('onReset');
    this.store.dispatch(PrimeActions.resetCounter());
  }

  onIsThisPrime() {
    console.log('onIsThisPrime');
    this.store.dispatch(PrimeActions.isThisPrimeNumber());
  }
}
