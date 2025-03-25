import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports : [CommonModule, ProfileCardComponent, ContactFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'satoris-app';
}
