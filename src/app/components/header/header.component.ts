import { Component, inject, signal, effect } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { NavLink } from '../../models/Links';
import { trigger, style, animate, transition, keyframes, state } from '@angular/animations';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
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
    ]),
    trigger('linkAnimation', [
      state('void', style({ 
        opacity: 0, 
        transform: 'translateY(-100%)' 
      })),
      state('visible', style({ 
        opacity: 1, 
        transform: 'translateY(0)' 
      })),
      transition('void => visible', [
        animate('300ms cubic-bezier(0.4, 0, 0.2, 1)')
      ])
    ]),
    trigger('indicatorAnimation', [
      transition(':enter', [
        style({ 
          opacity: 0,
          scale: 0.95
        }),
        animate('0.2s cubic-bezier(0.34, 1.56, 0.64, 1)', style({ 
          opacity: 1,
          scale: 1
        }))
      ]),
      transition(':leave', [
        animate('0.15s cubic-bezier(0.4, 0, 0.2, 1)', style({ 
          opacity: 0,
          scale: 0.95
        }))
      ])
    ])
  ],
})
export class HeaderComponent {
  router = inject(Router);
  
  links = signal<NavLink[]>([
    { name: 'home' },
    { name: 'about' },
    { name: 'projects' },
    { name: 'skills' },
    { name: 'experience' },
    { name: 'contact' },
  ]);

  activeLink = signal<string>('');

  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const currentRoute = this.router.url.split('/')[1]?.toLowerCase() || 'home';
      this.activeLink.set(currentRoute);
    });
    // Sync active link with current route
    effect(() => {
      const currentRoute = this.router.url.split('/')[1] || 'home';
      this.activeLink.set(currentRoute.toLowerCase());
    });
  }

  navigateTo(linkName: string) {
    const route = linkName.toLowerCase();
    this.router.navigate([`/${route}`]);
    this.activeLink.set(route);
  }

  capitalizeFirst(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  isActive(linkName: string): boolean {
    return this.activeLink() === linkName.toLowerCase();
  }
}