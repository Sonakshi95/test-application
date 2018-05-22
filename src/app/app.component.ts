import { Component } from '@angular/core';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  
  constructor()
{
console.log("TESTING")

}

}