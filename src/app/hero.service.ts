import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Promise<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return new Promise((resolve, reject) => {
      setTimeout(resolve.bind(null, HEROES), 5000);
    });
  }
}
