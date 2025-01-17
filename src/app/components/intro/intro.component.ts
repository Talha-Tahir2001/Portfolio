import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './intro.component.html',
  styles: ``,
  animations: [
    // Fade in and scale animation for the image
    trigger('fadeInScale', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
    ]),

    // Spring-like animation for the waving emoji
    trigger('springIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0)' }),
        animate(
          '0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
          style({ opacity: 1, transform: 'scale(1)' })
        ),
      ]),
    ]),

    // Slide in animation for the heading and links
    trigger('slideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(100%)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class IntroComponent {

}
