import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { vals } from 'src/vals';
import { AuthRequestPayload } from '../interfaces/auth-request-payload';
import { AuthResponsePayload } from '../interfaces/auth-response-payload';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _authenticated: boolean = false;
  private _authenticatedUser!: User;

  constructor(private httpClient: HttpClient) {}

  authenticate(loginUser: User) {
    this._sendAuthRequestHelper(loginUser, vals.sia);
  }

  unauthenticate() {
    // this.httpClient.post<Hobby>(vals.root, newHobby).subscribe((data: any) => {
    //   newHobby.fid = data.name;
    //   this._authenticated = false;
    // });
  }

  register(registerUser: User) {
    this._sendAuthRequestHelper(registerUser, vals.sua);
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

  _sendAuthRequestHelper(user: User, targetUrl: string) {
    const payload: AuthRequestPayload = {
      email: user.getEmail(),
      password: user.getPassword(),
      returnSecureToken: true,
    };
    return this.httpClient.post<AuthResponsePayload>(targetUrl, payload).pipe(
      catchError((error) => {
        let message = 'Server error.';
        if (!error.error || !error.error.error) {
          message = 'Network error.';
        } else {
          switch (error.error.error) {
            case 'EMAIL_EXISTS':
              message = 'Email already registered. Please use another email.';
              break;
            case 'OPERATION_NOT_ALLOWED':
              message = 'Password sign-in is disabled for this project.';
              break;
            case 'TOO_MANY_ATTEMPTS_TRY_LATER':
              message = 'Please try later. Too many attempts that failed.';
              break;
          }
        }
        return throwError(message);
      })
    );
  }
}
