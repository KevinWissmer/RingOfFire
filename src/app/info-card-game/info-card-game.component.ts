import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-card-game',
  templateUrl: './info-card-game.component.html',
  styleUrls: ['./info-card-game.component.scss']
})
export class InfoCardGameComponent implements OnInit {
  @Input() game;
  constructor() { }

  ngOnInit(): void {
  }

  displayNone() {
    this.game.info_visibility = false;
  }
}
