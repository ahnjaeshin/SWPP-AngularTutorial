import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;

  selectedHero: Hero;

  messages = [];

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.messages.push(`Selected Hero: ${hero.name}`);
    this.selectedHero = hero;
  }
}
