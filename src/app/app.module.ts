import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CounterComponent } from './counter/counter.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ActivityFeedComponent } from './activity-feed/activity-feed.component';
import { StoreModule } from '@ngrx/store';
import { primeNumberReducer } from './store/prime-number.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CounterComponent,
    FavoritesComponent,
    ActivityFeedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({prime_number: primeNumberReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
