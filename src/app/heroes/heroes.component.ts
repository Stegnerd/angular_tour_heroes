import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;

  selectedHero: Hero; // no selected hero when application starts

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor() {}

  // This is a lifecycle hook called shortly after creating the a component
  // put initialization logic in here
  ngOnInit(): void {}
}
