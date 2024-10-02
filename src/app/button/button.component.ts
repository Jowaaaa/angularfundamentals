import { Component, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  mouseOver() {
    const square = this.renderer.createElement('div');
    this.renderer.setStyle(square, 'width', '10px');
    this.renderer.setStyle(square, 'height', '10px');
    this.renderer.setStyle(square, 'backgroundColor', 'hotpink');
    this.renderer.setStyle(square, 'position', 'absolute');
    this.renderer.setStyle(
      square,
      'top',
      `${Math.random() * window.innerHeight}px`
    );
    this.renderer.setStyle(
      square,
      'left',
      `${Math.random() * window.innerWidth}px`
    );
    this.renderer.appendChild(this.el.nativeElement, square);
  }
}
