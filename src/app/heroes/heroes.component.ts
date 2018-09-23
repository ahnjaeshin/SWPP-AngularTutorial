import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

import { LoggingService } from '../logging.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;

  selectedHero: Hero;

  constructor(private loggingService: LoggingService) { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.loggingService.log(`Selected Hero: ${hero.name}`);
    this.selectedHero = hero;
  }
}
