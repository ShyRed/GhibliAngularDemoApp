import { Component, OnInit } from '@angular/core';
import FilmsService from 'src/app/services/films.service';
import Film from '../../models/film'

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html'
})
export class FilmsComponent implements OnInit {

  films: Film[];

  constructor(private filmsService: FilmsService) { }

  ngOnInit() {
    this.filmsService.getFilms().subscribe(result => this.films = result);
  }

}
