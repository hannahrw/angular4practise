import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PeopleService } from './people.service'

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  readonly form: FormGroup;
  people: object;

  constructor(formBuilder: FormBuilder, private peopleService: PeopleService) { 
    this.form = formBuilder.group({
     text: ''
   });
  }

  ngOnInit() { }

  search() {
    this.peopleService.search(this.form.value.text)
      .subscribe(people => this.people = people);
  };
}
