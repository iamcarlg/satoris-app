import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
@Component({
  selector: 'app-root',
  imports : [CommonModule, ProfileCardComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'satoris-app';
}
