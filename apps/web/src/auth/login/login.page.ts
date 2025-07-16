import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder, ReactiveFormsModule, Validators, FormGroup
} from '@angular/forms';
import { AuthService } from '../auth.service';
import { LoginDto } from '@tuesday/shared';
// TODO: Replace the deprecated HttpClientModule
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  providers: [AuthService],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css'],
})
export class LoginPage {
  private formBuilder = inject(FormBuilder);
  private authService = inject(AuthService);

  loginForm: FormGroup = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  onSubmit() {
    console.log('Login form submitted:', this.loginForm.value);
    console.log('Login form valid:', this.loginForm.valid);
    if (this.loginForm.valid) {
      const payload = this.loginForm.getRawValue() as LoginDto;
      this.authService.login(payload).subscribe({
        next: (ret) => console.log('Logged in! Returned token:', ret),
        error: err => console.error('Login failed', err),
      });
    }
  }
}
