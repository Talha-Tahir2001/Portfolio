import { Component, signal } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';

import { Experiences } from '../../models/Experiences';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [TimelineModule, CardModule, NgIf],
  templateUrl: './experience.component.html',
  styles: ``,
})
export class ExperienceComponent {
  
  myExperience = signal<Experiences[]>([
    {
      title: 'Graduated from University',
      location: 'Pakistan',
      description:
        "Graduated after 4 years of Bachelor's of Science in Software Engineering.",
      icon: 'pi pi-graduation-cap',
      date: 'Oct 2020 - Jul 2024',
    },
    {
      title: 'Freelance Software Engineer',
      location: 'Remote | Fiverr',
      description:
        'Delivered pixel-perfect Precision and responsive user experiences. Built small-scale web apps for clients, demonstrating creativity and adaptability',
      icon: 'pi pi-code',
      date: 'Nov 2021 - Dec 2022',
    },
    {
      title: 'Machine Learning Intern',
      location: 'Remote',
      description:
        'Developed machine learning models for detecting credit card fraud (81% accuracy) and classifying movie genres (79% accuracy) using techniques like logistic regression, decision trees, and neural networks and Designed predictive models for spam SMS detection (87% reduction in false positives) and breast cancer diagnosis (84% sensitivity and specificity) using natural language processing and support vector machines',
      icon: 'pi pi-cog',
      date: 'Jul 2023 - Aug 2023',
    },
    {
      title: 'Web Engineering Intern',
      location: 'Remote',
      description:
        " Improved Core Web Vitals metrics, achieving a 30% reduction in Largest Contentful Paint (LCP) and a 25% increase in First Input Delay (FID) performance by optimizing assets and implementing lazy loading in Angular apps. Improved accessibility score on tools like Lighthouse (e.g., raised from 71 to 84)",
      icon: 'pi pi-desktop',
      date: 'Oct 2024 - Dec 2024',
    },
  ]);
}
