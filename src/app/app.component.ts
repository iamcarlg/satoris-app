import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports : [CommonModule, ProfileCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'satoris-app';
}
