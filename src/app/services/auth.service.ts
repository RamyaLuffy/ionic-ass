import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [
    { username: 'user1', email: 'user1@example.com', password: 'password1' },
  ];
  private isAuthenticated: boolean = false;

  constructor() { } login(user: string, pass: string): boolean {
    this.isAuthenticated = user !== '' && pass !== '';
    return this.isAuthenticated;
  }

  isAuthenticate(): boolean {
    return this.isAuthenticated;
  }

  signup(signupData: { username: string; email: string; password: string }): boolean {

    const isUsernameTaken = this.users.some(user => user.username === signupData.username);
    const isEmailTaken = this.users.some(user => user.email === signupData.email);

    if (isUsernameTaken || isEmailTaken) {
      return false;
    }


    this.users.push(signupData);

    return true;
  }
}