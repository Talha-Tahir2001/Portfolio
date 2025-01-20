import { effect, Injectable, signal } from '@angular/core';

type Theme = 'light' | 'dark';
@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private theme = signal<Theme>('light');
  constructor() {
    this.initializeTheme();
    effect(() => {
      const currentTheme = this.theme();
      window.localStorage.setItem('theme', currentTheme);
      if (currentTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    });
  }

  private initializeTheme() {
    const localTheme = window.localStorage.getItem('theme') as Theme | null;
    if (localTheme) {
      this.theme.set(localTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.theme.set('dark');
    }
  }

  getTheme() {
    return this.theme;
  }

  toggleTheme() {
    this.theme.update((current) => (current === 'light' ? 'dark' : 'light'));
  }
}
