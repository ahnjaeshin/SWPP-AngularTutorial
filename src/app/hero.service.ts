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

  sleep (delay: number): void {
    const start = new Date().getTime();
    while (new Date().getTime() < start + delay) {}
  }

  getHeroes(): Hero[] {
    this.messageService.add('HeroService: fetched heroes');
    this.sleep(5000);
    return HEROES;
  }
}
