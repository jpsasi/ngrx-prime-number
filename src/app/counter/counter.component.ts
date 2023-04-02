import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CounterState } from './store/counter.state';
import { getCounter } from './store/counter.selector';
import { CounterActions } from './store/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, OnDestroy {

  counter$: Observable<number> | undefined;
  counter: number = 0
  subsription: Subscription | undefined;

  constructor(private store: Store<CounterState>) {}

  ngOnInit(): void {
    this.counter$ = this.store.select(getCounter);
    this.subsription = this.counter$.subscribe((value) => this.counter = value);
  }

  ngOnDestroy(): void {
    this.subsription?.unsubscribe();
  }

  onIncrement() {
    console.log('onIncrement');
    this.store.dispatch(CounterActions.incrcounter());
  }

  onDecrement() {
    console.log('onDecrement');
    this.store.dispatch(CounterActions.decrcounter());
  }

  onReset() {
    console.log('onReset');
    this.store.dispatch(CounterActions.resetcounter());
  }

  onIsThisPrime() {
    console.log('onIsThisPrime');
    this.store.dispatch(CounterActions.isthisprimenumber({counter: this.counter}));
  }
}
