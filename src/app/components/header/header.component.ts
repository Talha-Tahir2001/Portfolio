import { Component, signal } from '@angular/core';

import { NavLink } from '../../models/Links';

import {
  trigger,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styles: ``,
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translate(-50%, -100%)', opacity: 0 }),
        animate('0.8s cubic-bezier(0.34, 1.56, 0.64, 1)', keyframes([
          style({ transform: 'translate(-50%, -100%)', opacity: 0, offset: 0 }),
          style({ transform: 'translate(-50%, 10%)', opacity: 1, offset: 0.7 }),
          style({ transform: 'translate(-50%, 0%)', opacity: 1, offset: 1 })
        ]))
      ])
    ])
  ],
})
export class HeaderComponent {
  links = signal<NavLink[]>([
    { name: 'Home', hash: '#home' },
    { name: 'About', hash: '#about' },
    { name: 'Projects', hash: '#projects' },
    { name: 'Skills', hash: '#skills' },
    { name: 'Experience', hash: '#experience' },
    { name: 'Contact', hash: '#contact' },
    
  ]);
}
