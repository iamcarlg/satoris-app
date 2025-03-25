import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule ,Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
})
export class ContactFormComponent {

  constructor (private fb: FormBuilder) {};

  // The form group for the contact form
  contactForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: [''],
    address: ['']
  })
  
  sent = false;

  onSubmit() {
    console.log('Form successfully submitted!');
    this.sent = true;
  }
}
