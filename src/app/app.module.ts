import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CounterComponent } from './counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { primeNumberReducer } from './store/prime-number.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { PrimeNumberEffects } from './store/prime-number.effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({prime_number: primeNumberReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: true,
    }),
    EffectsModule.forRoot([PrimeNumberEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
