import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ActivationEnd, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import Film from 'src/app/models/film';
import FilmsService from 'src/app/services/films.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html'
})
export class FilmDetailComponent implements OnInit {

  film: Film;

  constructor(private route: ActivatedRoute, private filmsService: FilmsService) { }

  ngOnInit() {
    this.route.paramMap.pipe(switchMap((params: ParamMap) => this.filmsService.getFilm(params.get("id")))).subscribe(x => this.film = x);
  }
}
