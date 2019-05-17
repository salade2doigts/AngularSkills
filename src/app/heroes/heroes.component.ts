import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; // j'importe la class Hero

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero : Hero = {
    id : 1,
    name : 'Talgor' 
  }

  constructor() {
    
   }

  ngOnInit() {
      
  }

}