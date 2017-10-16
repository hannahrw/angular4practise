import { Injectable } from '@angular/core';
import {Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PeopleService {

  constructor(private http: Http) { }

  search(searchTerm: string) { //todo return type this
    debugger;
    return this.http.get(`https://swapi.co/api/people?search=${searchTerm}`)
      .map(response => response.json().results)
      ;
  }

}
