import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { SearchComponent } from './people/search/search.component';
import { PeopleService } from './people/people.service'

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    SearchComponent
  ],
  imports: [
    HttpModule,
    BrowserModule
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
