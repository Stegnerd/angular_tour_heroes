import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  // services injected must have @Injectable on them
  // constructor should be used for simple initilization , shouldn't do any actions
  constructor(private heroService: HeroService) {}

  // This is a lifecycle hook called shortly after creating the a component
  // put inilization 'doing' logic here
  ngOnInit(): void {
    this.getHeroes();
  }

  heroes: Hero[] = [];

  /**
   * Gets a list of heroes from the HeroService
   */
  getHeroes(): void {
    // now asynchronous and waits for the service to emit its values
    // when it does we use the lambda heroesFromCall => thisComponentHeroes = heroesFromCall
    this.heroService.getHeroes().subscribe((heores) => (this.heroes = heores));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService
      .addHero({ name } as Hero)
      .subscribe((hero) => this.heroes.push(hero));
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter((h) => h !== hero);
    // As a rule, an Observable does nothing until something subscribes.
    this.heroService.deleteHero(hero).subscribe();
  }
}
