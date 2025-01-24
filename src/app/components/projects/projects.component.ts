import { Component, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Projects } from '../../models/Projects';
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './projects.component.html',
  styles: ``,
  animations: [
    trigger('projectAnimation', [
      state('visible', style({
        transform: 'scale(1)',
        opacity: 1
      })),
      state('hidden', style({
        transform: 'scale(0.8)',
        opacity: 0.6
      })),
      transition('hidden => visible', [
        animate('0.5s ease-out')
      ])
    ])
  ]
})
export class ProjectsComponent {
  projects = signal<Projects[]>([
    {
      title: 'Sentinel',
      description: 'lorem ipsum dolor sit amet, consectetur adip inc commodo sed',
      tags: ['Angular', 'Tailwind CSS', 'Google Gemini'],
      imageUrl: '/senti.png',
      repoUrl: 'https://github.com/username/sentinel',
      deployedUrl: 'https://github.com/username/sentinel.json',
    },
    {
      title: 'Portfolio',
      description:
        'lorem ipsum dolor sit amet, consectetur adip inc commodo sed',
      tags: ['Angular', 'Tailwind CSS', 'Google Gemini'],
      imageUrl: '/senti.png',
      repoUrl: 'https://github.com/username/sentinel',
      deployedUrl: 'https://github.com/username/sentinel.json',
    },
    {
      title: 'Sentinel',
      description: 'lorem ipsum dolor sit amet, consectetur adip inc commodo sed',
      tags: ['Angular', 'Tailwind CSS', 'Google Gemini'],
      imageUrl: '/senti.png',
      repoUrl: 'https://github.com/username/sentinel',
      deployedUrl: 'https://github.com/username/sentinel.json',
    },
  ]);
  animationState = 'hidden';

  // @HostListener('window:scroll', [])
  // onScroll(): void {
  //   const elementPosition = document.querySelector(
  //     '.project-container'
  //   )?.getBoundingClientRect().top;

  //   const viewportHeight = window.innerHeight;

  //   if (elementPosition && elementPosition < viewportHeight - 50) {
  //     this.animationState = 'visible';
  //   } else {
  //     this.animationState = 'hidden';
  //   }
  // }

  // trackByFn(index: number): number {
  //   return index;
  // }

  handleImageError(event: any) {
    const img = event.target;
    img.src = '/placeholder.png'; // Fallback image
  }

  private intersectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.setAttribute('data-visible', 'true');
        }
      });
    },
    {
      threshold: 0,
      rootMargin: '0px 0px -10% 0px'
    }
  );

  ngAfterViewInit() {
    // Get all project elements and observe them
    const projectElements = document.querySelectorAll('.group');
    projectElements.forEach(element => {
      this.intersectionObserver.observe(element);
    });
  }

  getAnimationState(element: HTMLElement): string {
    return element.getAttribute('data-visible') === 'true' ? 'visible' : 'hidden';
  }

  getOpacity(element: HTMLElement): number {
    return element.getAttribute('data-visible') === 'true' ? 1 : 0.6;
  }



}
