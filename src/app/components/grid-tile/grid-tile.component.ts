import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grid-tile',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="grid-tile">
      &nbsp;
    </div>
  `,
  styleUrls: ['./grid-tile.component.scss']
})
export class GridTileComponent implements OnInit, OnChanges {
  @Input() id: number = 0;
  @Input() name: string = '';

  ngOnInit() {
    console.log('howdy');
  }

  ngOnChanges() { 
    console.log('howdy');
  }
}
