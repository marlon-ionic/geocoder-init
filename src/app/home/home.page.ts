import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonInput } from '@ionic/angular/standalone';
import { GeocoderService } from '../core/geocoder.service';
import { locate } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonInput]
})
export class HomePage {
  private readonly geoCoderService = inject(GeocoderService);
  geocodeResult?: google.maps.GeocoderResult
  addressInput = '';
  constructor() {
    addIcons({ locate });
  }


  async geocode(address: string) {
    const response = await this.geoCoderService.geocode(address);
    console.log('geocode:', response);
    this.geocodeResult = response?.results && response?.results.length ?response?.results[0] : undefined;
  }


}
