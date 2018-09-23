import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

import { Logger } from '../logging';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;

  selectedHero: Hero;

  logger: Logger;

  constructor() {
    this.logger = new Logger();
  }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.logger.log(`Selected Hero: ${hero.name}`);
    this.selectedHero = hero;
  }
}
