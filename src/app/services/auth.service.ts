import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _authenticated: boolean = false;
  private _authenticatedUser!: User;

  constructor() {}

  authenticate() {
    this._authenticated = true;

    // this.httpClient.post<Hobby>(vals.root, newHobby).subscribe((data: any) => {
    //   newHobby.fid = data.name;
    // });
  }

  unauthenticate() {
    this._authenticated = false;
  }

  getAuthenticationStatus() {
    return new Promise<boolean>((resolve, _) => {
      setTimeout(() => {
        resolve(this._authenticated);
      }, 100);
    });
  }

  getAuthedUser() {
    return this._authenticatedUser;
  }
}
