import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { ThemeSwitchComponent } from "./components/theme-switch/theme-switch.component";
import { FooterComponent } from "./components/footer/footer.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ThemeSwitchComponent, FooterComponent],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'Portfolio';
}
