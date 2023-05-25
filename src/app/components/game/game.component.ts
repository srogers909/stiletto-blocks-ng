import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from '../grid/grid.component';
import { GameManagerService } from 'src/app/services/game-manager.service';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    CommonModule,
    GridComponent
  ],
  template: `
    <div class="game-wrapper">
      <div class="score">&nbsp;</div>
      <app-grid />
      <div class="pieces">&nbsp;</div>
    </div>
  `,
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(
    private gameManager: GameManagerService
  ) { }

  ngOnInit() {
    
  }
}
