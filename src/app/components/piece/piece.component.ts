import { Component, OnChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-piece',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="piece">
      &nbsp;
    </div>
  `,
  styleUrls: ['./piece.component.scss']
})
export class PieceComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    console.log('howdy');
  }
}
