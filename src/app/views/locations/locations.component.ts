import { Component, OnInit } from '@angular/core';
import { LocationsService } from 'src/app/services/locations.service';

import Location from '../../models/location';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styles: []
})
export class LocationsComponent implements OnInit {

  locations: Location[];

  constructor(private locationService: LocationsService) { }

  ngOnInit() {
    this.locationService.getLocations().subscribe(x => this.locations = x);
  }

}
