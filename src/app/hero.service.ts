import { Injectable, Input } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}

  /**
   * Returns an observable arrary of heroes
   *
   * using the observable makes it async
   */
  getHeroes(): Observable<Hero[]> {
    // of emits a single value, array of Heroes from the body of an http response
    return of(HEROES);
  }
}
