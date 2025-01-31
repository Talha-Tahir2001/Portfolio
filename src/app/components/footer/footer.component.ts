import { DatePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './footer.component.html',
  styles: ``
})
export class FooterComponent {
  today = new Date();
  author = signal<string>('Talha Tahir');
}
