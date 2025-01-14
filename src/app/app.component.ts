import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HeaderComponent],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'Portfolio';
}
