import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  // Telling angular to provide HTTP client, router, and animations globally.
  providers: [
     provideRouter(routes),
     provideHttpClient(),
    ]
};
