import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [{ path: 'heroes', component: HeroesComponent }];

// you call for(root) to initialize the listening for navigation events on the root level of the app
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
