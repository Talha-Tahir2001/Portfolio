import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter,  } from '@angular/router';
import { routes } from './app.routes';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideToastr } from 'ngx-toastr';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, ),
    provideAnimationsAsync(),
    provideToastr(),
    providePrimeNG({
      theme: {
          preset: Aura
      }
  })
  ],
};
