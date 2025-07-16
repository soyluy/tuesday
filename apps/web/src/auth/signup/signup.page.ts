import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { RegisterDto } from '@tuesday/shared';
// TODO: Replace the deprecated HttpClientModule
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-signup',
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  providers: [AuthService],
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.css'],
})
export class SignupPage {
  
  private readonly formBuilder = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  signupForm = this.formBuilder.group({
      fullName: [''],
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  

  onSubmit() {
    if (this.signupForm.valid) {
      const formData = this.signupForm.getRawValue() as RegisterDto;
      this.authService.signup(formData).subscribe({
        next: (response) => {
          console.log('Signup successful:', response);
          // Handle successful signup, e.g., navigate to login page or show a success message
        },
        error: (error) => {
          console.error('Signup failed:', error);
          // Handle error, e.g., show an error message to the user
        },
      });
    } else {
      throw new Error('Form is invalid');
    }
  }
}