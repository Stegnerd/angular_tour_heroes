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

  heroes: Hero[];

  selectedHero: Hero; // no selected hero when application starts

  /**
   * Gets a list of heroes from the HeroService
   */
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  /**
   * Updates component parameter from click event
   * @param hero hero selected from list on click event
   */
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
