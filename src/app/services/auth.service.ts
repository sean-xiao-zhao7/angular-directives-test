import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _authenticated: boolean = false;

  constructor() {}

  authenticate() {
    this._authenticated = true;
  }

  unauthenticate() {
    this._authenticated = false;
  }

  authenticationStatus() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this._authenticated);
      }, 1000);
    });
  }
}
