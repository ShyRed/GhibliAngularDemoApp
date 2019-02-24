import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import Person from '../models/person';

const ServiceUrl: string = "https://ghibliapi.herokuapp.com";

@Injectable({
  providedIn: 'root'
})
export default class PeopleService {

  constructor(private http: HttpClient) { }

  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(`${ServiceUrl}/people`);
  }
}
