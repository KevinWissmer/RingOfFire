import { Component, Input, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FormGroup, FormBuilder, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

export interface DialogData {
  animal: string;
  name: string;
}



@Component({
  selector: 'app-dialog-add-player',
  templateUrl: './dialog-add-player.component.html',
  styleUrls: ['./dialog-add-player.component.scss']
})
export class DialogAddPlayerComponent implements OnInit {
  @Input() name = '';
  @Input() animal = 'assets/img/gui_elements/player_placeholder.png';


  constructor(
    public dialogRef: MatDialogRef<DialogAddPlayerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    this.data.game.addPlayer('test');
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }
}
