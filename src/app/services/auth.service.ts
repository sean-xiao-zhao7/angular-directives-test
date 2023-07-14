import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { vals } from 'src/vals';
import { RegisterPayload } from '../interfaces/register-payload';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _authenticated: boolean = false;
  private _authenticatedUser!: User;

  constructor(private httpClient: HttpClient) {}

  authenticate(loginUser: User) {
    // this.httpClient.post<Hobby>(vals.root, newHobby).subscribe((data: any) => {
    //   newHobby.fid = data.name;
    //   this._authenticated = true;
    // });
  }

  unauthenticate() {
    // this.httpClient.post<Hobby>(vals.root, newHobby).subscribe((data: any) => {
    //   newHobby.fid = data.name;
    //   this._authenticated = false;
    // });
  }

  register(registerUser: User) {
    const payload: RegisterPayload = {
      email: registerUser.getEmail(),
      password: registerUser.getPassword(),
      returnSecureToken: true,
    };
    this.httpClient.post<RegisterPayload>(vals.sa, payload).subscribe(
      (data: any) => {
        this._authenticated = true;
        this._authenticatedUser = registerUser;
      },
      (error: any) => {
        alert('Error registering.');
      }
    );
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
