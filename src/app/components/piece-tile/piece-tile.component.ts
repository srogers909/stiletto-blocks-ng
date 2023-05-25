import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-piece-tile',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      piece-tile works!
    </p>
  `,
  styleUrls: ['./piece-tile.component.scss']
})
export class PieceTileComponent {

}
