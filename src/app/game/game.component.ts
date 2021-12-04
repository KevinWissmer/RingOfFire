import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  cards_ids = Array.from(Array(52).keys())
  game!: Game;
  selected_index = -1;
  deletables = [-5];
  last_selected_index = -1;

  constructor() { }
  
  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    console.log(this.game);
  }
  
  setIndex(index: number) {
    this.last_selected_index = this.selected_index;
    this.selected_index = index;
    this.deletables.push(index);
    console.log(this.game.cards[index]);
  }
}

