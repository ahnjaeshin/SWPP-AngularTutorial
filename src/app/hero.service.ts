import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Promise<Hero[]> {
    return new Promise(resolve => {
      this.messageService.add('HeroService: fetched heroes');
      resolve(HEROES);
    });
  }

  getHero(id: number): Promise<Hero> {
    return new Promise(resolve => {
      this.messageService.add(`HeroService: fetched hero id=${id}`);
      resolve(HEROES.find(hero => hero.id === id));
    });
  }
}
