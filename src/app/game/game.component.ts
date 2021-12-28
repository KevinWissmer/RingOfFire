import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game';
import { MatDialog } from '@angular/material/dialog';
//import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  cards_ids = Array.from(Array(52).keys())
  game!: Game;
  selected_index = -1;
  deletables: number[] = [];
  last_selected_index = -1;



  constructor(public dialog: MatDialog) { }

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
    if (!this.deletables.includes(index)) {
      this.deletables.push(index);
      this.nextCard();
      this.nextPlayer();
    }
  }

  nextCard() {
    this.game.info_visibility = true;
    this.game.active_card = this.game.cards[this.selected_index];
    if (this.deletables.length == 52) {
      this.finishGame();
    }
  }

  finishGame() {
    console.log('finish');
  }

  nextPlayer() {
    let index = this.game.active_player_index;
    if (index != -1) {
      if (index + 1 < this.game.players.length) {
        this.game.active_player_index = index + 1;
        this.game.active_player = this.game.players[index + 1];
      } else {
        this.game.active_player_index = 0;
        this.game.active_player = this.game.players[0];
      }
    }
  }

}

