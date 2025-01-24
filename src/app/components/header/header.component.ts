import { Component, inject, signal } from '@angular/core';

import { NavLink } from '../../models/Links';

import {
  trigger,
  style,
  animate,
  transition,
  keyframes,
  state,
} from '@angular/animations';
import {  Router, RouterModule } from '@angular/router';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, ],
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
    { name: 'home',  },
    { name: 'about', },
    { name: 'projects',  },
    { name: 'skills',  },
    { name: 'experience',  },
    { name: 'contact', },
  ]);

  activeLink = signal<string>('home');

  setActiveLink(linkName: string) {
    const lowercaseName = linkName.toLowerCase();
    console.log('Original linkName:', linkName);
    console.log('Lowercase linkName:', lowercaseName);
    console.log('Current router URL:', this.router.url);
    
    this.activeLink.set(lowercaseName);
    
    // Ensure we're using the lowercase version for navigation
    this.router.navigate([lowercaseName]).then(
      success => console.log('Navigation success:', success),
      error => console.error('Navigation error:', error)
    );
  }
  capitalizeFirst(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // navigateToRoute(event: Event, linkName: string) {
  //   event.preventDefault();
  //   const route = encodeURIComponent(linkName.toLowerCase());
  //   console.log('Navigating to route:', route);
    
  //   this.router.navigate([route], { 
  //     skipLocationChange: false,
  //     replaceUrl: false
  //   }).then(
  //     success => {
  //       console.log('Navigation result:', success);
  //       if (success) {
  //         this.activeLink.set(linkName);
  //       }
  //     },
  //     error => console.error('Navigation error:', error)
  //   );
  // }

  // scrollToSection(link: NavLink) {
  //   const elementId = link.hash.substring(1);
  //   const element = document.getElementById(elementId);
    
  //   if (element) {
  //     // Update active link
  //     this.activeLink.set(link.name);
      
  //     // Smooth scroll with offset
  //     const offset = 80; // Adjust based on your header height
  //     const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      
  //     window.scrollTo({
  //       top: elementPosition - offset,
  //       behavior: 'smooth'
  //     });
  //   }
  // }

  // @HostListener('window:scroll', ['$event'])
  // onScroll(): void {
  //   const sections = this.links().map(link => ({
  //     name: link.name,
  //     element: document.getElementById(link.hash.substring(1))
  //   }));

  //   const currentPosition = window.scrollY + window.innerHeight / 3;

  //   for (const section of sections) {
  //     if (section.element) {
  //       const { offsetTop, offsetHeight } = section.element;
  //       if (currentPosition >= offsetTop && currentPosition < offsetTop + offsetHeight) {
  //         if (this.activeLink() !== section.name) {
  //           this.activeLink.set(section.name);
  //           // Update URL without scrolling
  //           history.replaceState(null, '', `#${section.element.id}`);
  //         }
  //         break;
  //       }
  //     }
  //   }
  // }

  // ngOnInit() {
  //   // Handle initial hash on page load
  //   const hash = window.location.hash;
  //   if (hash) {
  //     const linkName = this.links().find(link => link.hash === hash)?.name;
  //     if (linkName) {
  //       this.activeLink.set(linkName);
  //     }
  //   }
  // }
  // handleClick(link: NavLink) {
  //   this.setActiveLink(link.name);
    
  //   // Remove the '#' from the hash
  //   const elementId = link.hash.substring(1);
  //   const element = document.getElementById(elementId);
    
  //   if (element) {
  //     element.scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'start'
  //     });
  //   }
  // }

}
