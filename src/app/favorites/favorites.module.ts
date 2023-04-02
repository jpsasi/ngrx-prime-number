import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './favorites.component';
import { FavoritesRoutingModule } from './favorites-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { FavoritesEffects } from './store/favorites.effects';

@NgModule({
  declarations: [
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    EffectsModule.forFeature([FavoritesEffects])
  ]
})
export class FavoritesModule { }
