import { Component, inject, signal } from '@angular/core';
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

  activeLink = signal<string>(
    this.getCurrentRouteFromUrl(this.router.url)
  );

  constructor() {
    // Initialize from current route
    this.updateActiveLink(this.router.url);

    // Subscribe to route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateActiveLink(event.url);
      }
    });
  }

  private getCurrentRouteFromUrl(url: string): string {
    return url.split('/')[1]?.toLowerCase() || 'home';
  }

  private updateActiveLink(url: string): void {
    this.activeLink.set(this.getCurrentRouteFromUrl(url));
  }

  navigateTo(linkName: string): void {
    const route = linkName.toLowerCase();
    this.router.navigate([`/${route}`]);
    // No need to manually set activeLink - it will be handled by the router subscription
  }

  capitalizeFirst(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  isActive(linkName: string): boolean {
    return this.activeLink() === linkName.toLowerCase();
  }
}