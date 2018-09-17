import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { Hero } from './hero';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root',
})
export class HeroService {

  private heroesUrl = '/api/hero/';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  /** GET heroes from the server */
  getHeroes (): Promise<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(tap(heroes => this.log('fetched heroes')))
      .toPromise()
      .catch(this.handleError('getHeroes', []));
  }

  /** GET hero by id. Will 404 if id not found */
  getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url)
      .pipe(tap(_ => this.log(`fetched hero id=${id}`)))
      .toPromise()
      .catch(this.handleError<Hero>(`getHero id=${id}`));
  }

  /** PUT: update the hero on the server */
  updateHero (hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http.put(url, hero, httpOptions)
      .pipe(tap(_ => this.log(`updated hero id=${hero.id}`)))
      .toPromise()
      .then(() => hero)
      .catch(this.handleError<any>('updateHero'));
  }

  /** POST: add a new hero to the server */
  addHero (hero: Partial<Hero>): Promise<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
      .pipe(tap((newHero: Hero) => this.log(`added hero with id=${newHero.id}`)))
      .toPromise()
      .catch(this.handleError<Hero>('addHero'));
  }

  /** DELETE: delete the hero from the server */
  deleteHero (hero: Hero | number): Promise<Hero> {
    const id = (typeof hero === 'number') ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, httpOptions)
      .pipe(tap(_ => this.log(`deleted hero id=${id}`)))
      .toPromise()
      .catch(this.handleError<Hero>('deleteHero'));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Promise<T> => {

      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return Promise.resolve(result as T);
    };
  }
}
