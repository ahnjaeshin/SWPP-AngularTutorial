import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

import { LoggingService } from '../logging.service';

// Don't have to use @Injectable as this class has no dependency
export class MockLoggingService extends LoggingService {
  log(msg: string): void {
    console.error(msg);
    this.messages.push(`Logging to error`, msg);
  }
}

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [
    { provide: LoggingService, useClass: MockLoggingService }
  ],
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

