import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { APP_INITIALIZER } from '@angular/core';
import { GeocoderService } from './app/core/geocoder.service';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    {
      deps: [GeocoderService],
      multi: true,
      provide: APP_INITIALIZER,
      useFactory: (geocoderService: GeocoderService) => async () => await geocoderService.init()
     },
  ],
});
