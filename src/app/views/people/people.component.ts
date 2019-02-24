import { Component, OnInit } from '@angular/core';

import PeopleService from '../../services/people.service';
import Person from 'src/app/models/person';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styles: []
})
export class PeopleComponent implements OnInit {

  people: Person[];

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.peopleService.getPeople().subscribe(x => this.people = x);
  }
}
