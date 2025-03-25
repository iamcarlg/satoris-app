import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { GoogleMapsModule } from '@angular/google-maps'
@Component({
  selector: 'app-root',
  standalone: true,
  imports : [CommonModule, ProfileCardComponent, GoogleMapsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'satoris-app';
  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
}
