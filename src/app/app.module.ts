import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroSearchComponent }  from './hero-search/hero-search.component';
import { MessagesComponent }    from './messages/messages.component';
//import { MockHeroesComponent } from './mock-heroes/mock-heroes.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

 
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    //MockHeroesComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }