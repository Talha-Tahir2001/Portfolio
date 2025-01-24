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
  styles: ``
})
export class ExperienceComponent {
  // events = [

  //   { status: 'Example Event' }

  // ];
  myExperience = signal<Experiences[]>([
    {
      title: 'Graduated from University',
      location: 'Miami, FL',
      description: 'Graduated after 4 years of Bachelor\'s of Science in Software Engineering.',
      icon: 'pi pi-graduation-cap',
      date: 'Oct 2020 - Jul 2024',
    },
    {
      title: 'Front-End Developer',
      location: 'Orlando, FL',
      description: 'I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.',
      icon: '',
      date: '2019 - 2021',
    },
    {
      title: 'Full-Stack Developer',
      location: 'Houston, TX',
      description: 'I\'m now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I\'m open to full-time opportunities.',
      icon: '',
      date: '2021 - present',
    },
  ]);
}
