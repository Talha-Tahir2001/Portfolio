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
      description: 'Sentinel: An AI Powered Tool for Sentiment Analysis',
      tags: ['Angular', 'Tailwind CSS', 'DaisyUI','Google Gemini Pro'],
      imageUrl: '/senti.png',
      repoUrl: 'https://github.com/Talha-Tahir2001/sentinel',
      deployedUrl: 'https://sentinel-xi.vercel.app/',
    },
    {
      title: 'SpamBuster',
      description: 'SpamBuster: An AI Powered Tool for Spam Detection',
      tags: ['Python', 'Gradio', 'Keras','Numpy', 'NLTK', 'Pandas'],
      imageUrl: '/spam-sms.png',
      repoUrl: 'https://github.com/Talha-Tahir2001/ML-and-DL',
      deployedUrl: 'https://huggingface.co/spaces/Talha-tahir666/Spam-SMS-Detection',
    },
    {
      title: 'Textractor',
      description: 'Textractor: An AI-Powered tool for accurate and efficient text extraction.',
      tags: ['Angular', 'Tailwind CSS', 'Google Gemini',  ],
      imageUrl: '/textractor.png',
      repoUrl: 'https://github.com/Talha-Tahir2001/textractor',
      deployedUrl: 'https://textractor-blond.vercel.app/',
    },
    {
      title: 'Snake',
      description:
        'Snake: A basic Snake Game that was built in Java with AWT and Swing',
      tags: ['Java', 'Abstract Window Toolkit', 'Swing'],
      imageUrl: '/snake.png',
      repoUrl: 'https://github.com/Talha-Tahir2001/Snake-Game',
      deployedUrl: 'https://github.com/Talha-Tahir2001/Snake-Game',
    },
    {
      title: 'Portfolio',
      description:
        'Portfolio: My personal website created using Angular, Tailwind CSS, and PrimeNG.',
      tags: ['Angular', 'Tailwind CSS', 'PrimeNG'],
      imageUrl: '/senti.png',
      repoUrl: 'https://github.com/Talha-Tahir2001/portfolio',
      deployedUrl: 'https://portfolio-eight-chi-89.vercel.app/home',
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
