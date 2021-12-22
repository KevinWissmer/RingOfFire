import { Component, Input, OnInit } from '@angular/core';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input() game;
  public player_name: string = '';
  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('qweqwe dialog was closed', result);
      this.player_name = result;
      this.game.addPlayer(result);
    });
  }

  ngOnInit(): void {
  }



}
