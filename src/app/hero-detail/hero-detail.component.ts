import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  // the Input decorator is needed because it is binding to a model that is passed in from a parent external component
  @Input() hero: Hero;

  constructor() {}

  ngOnInit(): void {}
}
