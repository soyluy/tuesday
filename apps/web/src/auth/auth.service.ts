import { inject, Injectable } from "@angular/core";
import type { LoginDto, RegisterDto } from "@tuesday/shared";
import { localDevEnvironment } from "../environments/local.dev.environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class AuthService {
  private readonly apiUrl = `${localDevEnvironment.apiUrl}/auth`
  private readonly http: HttpClient = inject(HttpClient);

  constructor() {
    console.log("AuthService initialized with API URL:", this.apiUrl);
  }

  signup(formData: RegisterDto): Observable<RegisterDto>{
    const response = this.http.post<RegisterDto>(`${this.apiUrl}/register`, formData);
    response.subscribe({
      next: (data) => console.log("Signup response:", data),
      error: (error) => console.error("Signup error:", error)
    });
    return this.http.post<RegisterDto>(`${this.apiUrl}/register`, formData);
  }

  login(credentials: LoginDto) {
    return this.http.post<string>(`${this.apiUrl}/login`, credentials);
  }
}