import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  // services injected must have @Injectable on them
  // constructor should be used for simple initilization , shouldn't do any actions
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

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
    // now asynchronous and waits for the service to emit its values
    // when it does we use the lambda heroesFromCall => thisComponentHeroes = heroesFromCall
    this.heroService.getHeroes().subscribe((heores) => (this.heroes = heores));
  }

  /**
   * Updates component parameter from click event
   * @param hero hero selected from list on click event
   */
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
}
