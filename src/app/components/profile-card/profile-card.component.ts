import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Profile } from '../../interfaces/profile';
import { ProfileService } from '../../services/profile.service';

// This component displays the profile card of a user and their friends
@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss'
})

export class ProfileCardComponent {
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
      })

      // Loading the friends profiles info from the RandomUser API
      this.profileService.getFriendsProfileUser().subscribe((data: any) => {
        this.friends = data.results;
        console.log(this.profile);
      })
  }
}
