import { Component, Input, OnInit } from '@angular/core';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input() game;
  public player_name: string = 'asdasdasd';
  constructor(public dialog: MatDialog) { }
  animal: string = 'asdasdasd';
  name: string = 'asdasdasd';

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent, {
      data: {
        game: this.game,
        animal: this.animal,
        name: this.name
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('qweqwe dialog was closed', result);
      if (result != undefined) {
        this.name = result;
      this.game.addPlayer(result);
      }
      
    });
  }

  deletePlayerYes(player){
    console.log(player.id)
    let index = 0;
    for (let i = 0; i < this.game.players.length; i++) {
      if(this.game.players[i].id == player.id){
        this.game.players.splice(i, 1); 
        index = i;
      }
    }
    
    if(this.game.players.length == 0) {
      this.game.active_player_index = -1;
      this.game.active_player = { "id": -1, "name": "Add Player", "img": "/assets/img/gui_elements/arrow-53-64.png" };
    }else{
      this.game.active_player = this.game.players[index];
    }
    if(this.game.clicked_player_id == 0//?????????
      ) {
        //asdasdasdasdasdasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    }
    this.game.clicked_player_id = -1;
  }



  deletePlayerNo(){
    this.game.clicked_player_id = -1;
  }


  highlightPlayer(player) {
    console.log(player.id);
    this.game.clicked_player_id = player.id;
  }

  ngOnInit(): void {
  }
}
