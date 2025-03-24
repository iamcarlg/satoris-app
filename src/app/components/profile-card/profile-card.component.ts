import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Profile } from '../../interfaces/profile';
import { last } from 'rxjs';

// This component displays the profile card of a user and their friends
@Component({
  selector: 'app-profile-card',
  imports: [CommonModule],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss'
})

export class ProfileCardComponent {
  // The profile of the user
  profile: Profile = {
    firstName: 'Carl Gauss',
    lastName: 'Rugero',
    email: 'rugerocarlgauss@gmail.com',
    location: 'Thionville, France',
    picture:''
  };

  // The friends of the user
  friends: Profile[] = [
    {
      firstName: 'Marc',
      lastName: 'Zuckerberg',
      email: 'marc.Zuckerberg@gmail.com',
      location: 'Palo Alto, USA',
      picture: ''
    },
    {
      firstName: 'Elon',
      lastName: 'Musk',
      location: 'Los Angeles, USA',
      email: 'elon.musk@gmail.com',
      picture: ''
    }
  ];
}
