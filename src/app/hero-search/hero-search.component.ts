import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.css' ]
})
export class HeroSearchComponent implements OnInit {
  heroes$: Promise<Hero[]>;

  constructor(private heroService: HeroService) {}

  search(term: string): void {
    this.heroes$ = this.heroService.searchHeroes(term);
  }

  ngOnInit(): void {

  }
}
