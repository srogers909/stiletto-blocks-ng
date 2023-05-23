import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      grid works!
    </p>
  `,
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {

}
