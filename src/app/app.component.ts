import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { LearnService } from './learn.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Cookbook';

  private chapter = 0;
  private CHAPTERS = ['Services', 'Promise', 'Observable', 'HTTP'];

  recipes = new BehaviorSubject<string>(this.CHAPTERS[this.chapter]);
  recipes$: Observable<string[]>;

  constructor(private learnService: LearnService) {}

  ngOnInit() {
    this.generateRecipe();

  }

  public generateRecipe(): void {
    this.recipes$ = this.recipes.asObservable().pipe(
      map(recipe => this.learnService.learnRecipe(recipe)),
    );
  }

  public prevRecipe(): void {
    this.chapter = (this.chapter === 0) ? this.CHAPTERS.length : this.chapter;
    this.chapter--;
    this.recipes.next(this.CHAPTERS[this.chapter]);
  }

  public nextRecipe(): void {
    this.chapter++;
    this.chapter = (this.chapter === this.CHAPTERS.length) ? 0 : this.chapter;
    this.recipes.next(this.CHAPTERS[this.chapter]);
  }
}
