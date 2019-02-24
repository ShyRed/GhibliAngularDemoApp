import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import Location from '../models/location';

const ServiceUrl: string = "https://ghibliapi.herokuapp.com";

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(private http: HttpClient) { }

  getLocations(): Observable<Location[]> {
    return this.http.get<Location[]>(`${ServiceUrl}/locations`);
  }
}
