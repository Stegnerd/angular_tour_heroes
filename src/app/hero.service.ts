import { Injectable, Input } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  /**
   * Returns an observable arrary of heroes
   *
   * using the observable makes it async
   */
  getHeroes(): Observable<Hero[]> {
    // of emits a single value, array of Heroes from the body of an http response
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
