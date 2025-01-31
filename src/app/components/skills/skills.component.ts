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
    { name: 'Angular 18' },
    { name: 'NEST JS' },
    {name: 'Firebase'},
    {name: 'MongoDB'},
    { name: 'TypeScript' },
    { name: 'HTML 5' },
    { name: 'Tailwind CSS' },    
    { name: 'DaisyUI' },
    { name: 'Prime NG'},
  ]);

}
