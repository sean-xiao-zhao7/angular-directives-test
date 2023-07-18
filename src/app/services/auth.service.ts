import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { vals } from 'src/vals';
import { AuthRequestPayload } from '../interfaces/auth-request-payload';
import { AuthResponsePayload } from '../interfaces/auth-response-payload';
import { catchError } from 'rxjs/operators';
import { BehaviorSubject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _authenticated: boolean = false;
  private _authenticatedUser: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private httpClient: HttpClient) {}

  authenticate(loginUser: User) {
    return this._sendAuthRequestHelper(loginUser, vals.sia);
  }

  unauthenticate() {}

  register(registerUser: User) {
    return this._sendAuthRequestHelper(registerUser, vals.sua);
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

  private _sendAuthRequestHelper(user: User, targetUrl: string) {
    const payload: AuthRequestPayload = {
      email: user.getEmail(),
      password: user.getPassword(),
      returnSecureToken: true,
    };
    return this.httpClient.post<AuthResponsePayload>(targetUrl, payload).pipe(
      catchError((response) => {
        let message = 'Server error.';
        if (!response.error || !response.error.error) {
          message = 'Network cannot be reached.';
        } else {
          switch (response.error.error.message) {
            case 'EMAIL_EXISTS':
              message = 'Email already registered. Please use another email.';
              break;
            case 'OPERATION_NOT_ALLOWED':
              message = 'Password sign-in is disabled for this project.';
              break;
            case 'TOO_MANY_ATTEMPTS_TRY_LATER':
              message = 'Please try later. Too many attempts that failed.';
              break;
            case 'EMAIL_NOT_FOUND':
              message =
                'Email is not registered with this app. Please register first.';
              break;
            case 'INVALID_PASSWORD':
              message = 'The password is incorrect. Please try again.';
              break;
            case 'USER_DISABLED':
              message = 'Your account has been suspended by the admin.';
              break;
          }
        }
        return throwError(message);
      })
    );
  }
}
