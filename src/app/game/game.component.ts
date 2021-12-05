import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game';
import {MatDialog} from '@angular/material/dialog';

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

  constructor(public dialog: MatDialog) { }
  
  ngOnInit(): void {
    this.newGame();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
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

