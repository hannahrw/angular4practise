import { Injectable } from '@angular/core';
import {Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Person } from './person/person';

@Injectable()
export class PeopleService {

  constructor(private http: Http) { }

  search(searchTerm: string) : Observable<ReadonlyArray<Person>> {
    return this.http.get(`https://swapi.co/api/people?search=${searchTerm}`)
      .map(response => <Person[]>response.json().results);
  }
}
