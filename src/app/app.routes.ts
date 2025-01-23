import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
     {
        path: 'About',  // Add this temporary route
        redirectTo: 'about',
        pathMatch: 'full'
    },
    {
        path: 'projects',
        component: ProjectsComponent
    },
    {
        path: 'skills',
        component: SkillsComponent
    },
    {
        path: 'experience',
        component: ExperienceComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
];
