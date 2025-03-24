import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Profil } from '../../interfaces/profil';
import { last } from 'rxjs';

@Component({
  selector: 'app-profile-card',
  imports: [],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss'
})
export class ProfileCardComponent {
  profile: Profile = {
    firstName: 'Carl Gauss',
    lastName: 'Rugero',
    email: 'rugerocarlgauss@gmail.com',
    picture:''
  };

  friends: Profile[] = [
    {
      firstName: 'Marc',
      lastName: 'Zuckerberg',
      email: 'marc.Zuckerberg@gmail.com',
      picture: ''
    }
  ];
}
