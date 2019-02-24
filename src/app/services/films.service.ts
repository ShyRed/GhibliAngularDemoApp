import { Injectable } from '@angular/core';
import Film from '../models/film';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const ServiceUrl: string = "https://ghibliapi.herokuapp.com";

@Injectable({
  providedIn: 'root'
})
export default class FilmsService {
  
  constructor(private http: HttpClient) { }

  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(`${ServiceUrl}/films`);
  }

  getFilm(id: string): Observable<Film> {
    return this.http.get<Film>(`${ServiceUrl}/films/${id}`);
  }
}
