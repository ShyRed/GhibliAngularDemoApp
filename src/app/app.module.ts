import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FilmsComponent } from './views/films/films.component';
import { FilmDetailComponent } from './views/film-detail/film-detail.component';
import { PeopleComponent } from './views/people/people.component';
import { LocationsComponent } from './views/locations/locations.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    FilmsComponent,
    FilmDetailComponent,
    PeopleComponent,
    LocationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
