import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule ,Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
})
export class ContactFormComponent {
  contactForm: FormGroup;
  msgSsent = false;

  // The contructor is called when the component is created
  constructor (private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: [''],
      address: ['']
    })
  };  

  onSubmit() {
    console.log('Form successfully submitted!');
    this.msgSsent = true;
  }
}
