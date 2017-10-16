import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service'

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people: object;

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.getPeople();
  }

  getPeople() {
    debugger;
    this.peopleService.search('yoda')
      .subscribe(people => this.people = people);
  };
}
