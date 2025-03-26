import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Profile } from '../../interfaces/profile';
import { ProfileService } from '../../services/profile.service';
import { GoogleMapsModule } from '@angular/google-maps';

// This component displays the profile card of a user and their friends
@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [CommonModule, GoogleMapsModule],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss'
})

export class ProfileCardComponent {
  // The Google Maps Options
  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 4;
  countView = 0 // The number of times the page has been refreshed

  // The profile of the user
  profile: Profile | null = null;

  // The friends of the user
  friends: Profile[] = [];

  // The constructor is called when the component is created
  constructor(private profileService: ProfileService){
    this.loadData();
  }

  // Method to load all the data
  loadData(){
    // Loading the user profile info from the RandomUser API
    this.profileService.getRandomUser().subscribe((data: any) => {
      this.profile = data.results[0];
      console.log(this.profile);
      this.countView++; // Increment the number of times the page loads data
      })

      // Loading the friends profiles info from the RandomUser API
      this.profileService.getFriendsProfileUser().subscribe((data: any) => {
        this.friends = data.results;
        console.log(this.profile);
      })
  }

  isVisible = false;

  // The method to show or hide the details of the profile cards
  showMore() {
    this.isVisible = !this.isVisible;
  }

  // The method to refresh the page and load new data
  refreshPage(){
    this.loadData();
  }
  
}
