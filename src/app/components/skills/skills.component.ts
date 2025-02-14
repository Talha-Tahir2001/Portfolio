import { Component, ElementRef, inject, signal } from '@angular/core';
import { Skills } from '../../models/Skills';
import { trigger, style, transition, animate, query, stagger } from '@angular/animations';


@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styles: ``,
  animations: [
    trigger('listStagger', [
      transition(':enter', [
        query('li', [
          style({ opacity: 0, transform: 'translateY(100px)' }),
          stagger('100ms', [
            animate(
              '0.5s ease-out',
              style({ opacity: 1, transform: 'translateY(0)' })
            )
          ])
        ])
      ])
    ])
  ],
})
export class SkillsComponent {

  mySkills = signal<Skills[]>([
    { name: 'Angular 18' , icon: 'skills/angular-svgrepo-com.svg' },
    {name: '.NET Core', icon: 'skills/dotnet-svgrepo-com.svg'},
    { name: 'NEST JS' , icon:'skills/nestjs-svgrepo-com.svg'},
    {name: 'Python', icon: 'skills/python-svgrepo-com.svg'},
    {name: 'Tensorflow', icon: 'skills/tensorflow-svgrepo-com.svg'},
    {name: 'Node JS', icon: 'skills/node-svgrepo-com.svg'},
    {name: 'Express JS', icon: 'skills/express-svgrepo-com.svg'},
    {name: 'Firebase', icon: 'skills/firebase-svgrepo-com.svg'},
    {name: 'MongoDB', icon: 'skills/mongo-svgrepo-com.svg'},
    { name: 'TypeScript' , icon: 'skills/typescript-official-svgrepo-com.svg'},
    { name: 'Tailwind CSS', icon: 'skills/tailwind-svgrepo-com.svg' }, 
    { name: 'Angular Material', icon: 'skills/material-ui-svgrepo-com.svg' },   
    { name: 'Git' , icon: 'skills/git-svgrepo-com.svg'},
    
  ]);

}
