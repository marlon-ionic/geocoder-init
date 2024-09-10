import { Injectable } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Injectable({
  providedIn: 'root'
})
export class GeocoderService {
  private geocoder?: google.maps.Geocoder;

  constructor() { }

  async init() {
    const loader = new Loader({
      apiKey: import.meta.env['NG_APP_GOOGLE_API_KEY'],
      libraries: ['geocoding']
    });
    const geocoding = await loader.importLibrary('geocoding');
    console.log('geocoding: loaded', geocoding);
    this.geocoder = new geocoding.Geocoder();
  }

  async geocode(address: string): Promise<google.maps.GeocoderResponse|undefined> {
    if (!this.geocoder) {
      await this.init();
    }
      const response =  await this.geocoder?.geocode({ address });
      return response;
  }
}
