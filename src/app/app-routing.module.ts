import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { FilmsComponent } from './views/films/films.component';
import { FilmDetailComponent } from './views/film-detail/film-detail.component';
import { PeopleComponent } from './views/people/people.component';
import { LocationsComponent } from './views/locations/locations.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'films', component: FilmsComponent },
  { path: 'films/:id', component: FilmDetailComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'locations', component: LocationsComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
