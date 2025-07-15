import { inject, Injectable } from "@angular/core";
import type { RegisterDto } from "@tuesday/shared";
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
    return this.http.post<RegisterDto>(`${this.apiUrl}/register`, formData);
  }

  login(credentials: { username: string; password: string }) {
    // Implement the login logic here
    console.log("Login credentials:", credentials);
  }
}