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

  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async getHeroes(): Promise<Hero[]> {
    await this.sleep(5000);
    await this.messageService.add('HeroService: fetched heroes');
    return HEROES;
  }
}
