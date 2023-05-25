import { Component, OnChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameManagerService } from 'src/app/services/game-manager.service';
import { GridTileComponent } from '../grid-tile/grid-tile.component';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [
    CommonModule,
    GridTileComponent
  ],
  template: `
    <div class="grid-wrapper">
      <ng-container *ngFor="let g of grid">
        <app-grid-tile name="{{g.name}}" />
      </ng-container>
    </div>
  `,
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit, OnChanges {
  grid: Array<any> = [];

  constructor(
    private gameManager: GameManagerService
  ) { }

  ngOnInit(): void {
    this.createGrid();
  }

  ngOnChanges() {
    console.log('howdy');
  }

  createGrid() {
    for (let i = 0; i < 100; i++) {
      this.grid.push({
        id: i,
        name: `test-${i}`
      });
    }
  }
}
