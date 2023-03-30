import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeViewComponent } from './prime-view.component';

const routes: Routes = [{ path: '', component: PrimeViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrimeViewRoutingModule { }
