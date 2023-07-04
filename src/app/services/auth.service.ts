import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authenticated: boolean = false;

  constructor() {}

  authenticate() {
    this.authenticated = true;
  }

  unauthenticate() {
    this.authenticated = false;
  }

  authenticationStatus() {
    setTimeout(() => {
      return this.authenticated;
    }, 3000);
  }
}
