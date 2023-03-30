import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeViewRoutingModule } from './prime-view-routing.module';
import { PrimeViewComponent } from './prime-view.component';


@NgModule({
  declarations: [
    PrimeViewComponent
  ],
  imports: [
    CommonModule,
    PrimeViewRoutingModule
  ]
})
export class PrimeViewModule { }
