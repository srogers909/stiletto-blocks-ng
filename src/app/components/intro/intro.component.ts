import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="intro-wrapper">
      <h1>Stiletto Blocks</h1>
      <button (click)="startGame()">Start Game</button>
    </div>
  `,
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {

  constructor(
    private router: Router
  ) { }

  async startGame() {
    await document.documentElement.requestFullscreen();
    await this.router.navigate(['/game']);
  }
}
