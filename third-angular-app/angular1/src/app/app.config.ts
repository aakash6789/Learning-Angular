
import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // import FormsModule
import { provideHttpClient } from '@angular/common/http'; // import provideHttpClient
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(BrowserModule, FormsModule), // include FormsModule
    provideHttpClient() // add provideHttpClient to your providers
  ],
};



