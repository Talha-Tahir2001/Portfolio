import { Component, signal, OnInit, HostListener } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { Experiences } from '../../models/Experiences';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [TimelineModule],
  templateUrl: './experience.component.html',
  styles: `
    ::ng-deep .p-timeline-event-opposite {
      @media (max-width: 768px) {
        display: none !important;
      }
    }    
    ::ng-deep .p-timeline-event-content {
      @media (max-width: 768px) {
        width: 100% !important;
      }
    }
  `
})
export class ExperienceComponent implements OnInit {
  screenWidth: number = 0;

  myExperience = signal<Experiences[]>([          
    {
      title: 'Web Engineering Intern',
      location: 'Remote',
      description: [
        "Improved Core Web Vitals metrics, achieving a 30% reduction in Largest Contentful Paint (LCP)",
        "25% increase in First Input Delay (FID) performance by optimizing assets and implementing lazy loading in Angular apps.",
        "Increased First Input Delay (FID) performance by 25% through optimizing assets and implementing lazy loading in Angular apps.",
        "Improved accessibility score on tools like Lighthouse (e.g., raised from 71 to 84)"
      ],
      icon: 'pi pi-globe',
      date: 'Oct 2024 - Dec 2024',
    },
    {
      title: 'Machine Learning Intern',
      location: 'Remote ',
      description:[
       // 'Developed machine learning models for detecting credit card fraud (81% accuracy) and classifying movie genres (79% accuracy) using techniques like logistic regression, decision trees, and neural networks.', 
       // 'Designed predictive models for spam SMS detection (87% reduction in false positives) and breast cancer diagnosis (84% sensitivity and specificity) using natural language processing and support vector machines.',
       'Developed machine learning models for detecting credit card fraud with 81% accuracy.',
        'Created classification systems for movie genres with 79% accuracy using techniques like logistic regression, decision trees, and neural networks.',
        'Designed predictive models for spam SMS detection with 87% reduction in false positives.',
        'Built breast cancer diagnosis tools with 84% sensitivity and specificity using natural language processing and support vector machines.'
      ],
      icon: 'pi pi-chart-line',
      date: 'Jul 2023 - Aug 2023',
    },
    {
      title: 'Freelance Software Engineer',
      location: 'Remote | Fiverr',
      description:[
        'Delivered pixel-perfect Precision and responsive user experiences.', 
        'Built small-scale web apps for clients, demonstrating creativity and adaptability',
         'Worked with various frontend frameworks including Angular and Blazor.'
      ],
      icon: 'pi pi-code',
      date: 'Nov 2021 - Dec 2022',
    },
    {
      title: 'Graduated from University',
      location: 'Pakistan',
      description: [
        "Graduated after 4 years of Bachelor's of Science in Software Engineering.",
        "Specialized in web technologies and machine learning applications.",
        "Completed final year project on AI-driven web applications."
      ],
      icon: 'pi pi-graduation-cap',
      date: 'Oct 2020 - Jul 2024',
    },
  ]);

  ngOnInit() {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
  }
}