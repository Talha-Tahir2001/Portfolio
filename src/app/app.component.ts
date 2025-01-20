import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { ThemeSwitchComponent } from "./components/theme-switch/theme-switch.component";
import { ThemeSubmitComponent } from "./components/theme-submit/theme-submit.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ThemeSwitchComponent],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'Portfolio';
}
