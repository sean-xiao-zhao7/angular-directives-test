import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { exhaustMap, take } from 'rxjs/operators';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // return this.authService.getAuthedUser().pipe(
    //   take(1),
    //   exhaustMap((user) => {
    //     const authReq = req.clone({
    //       params: new HttpParams().set('auth', user.idToken),
    //     });
    //     return next.handle(authReq);
    //   })
    // );
    return next.handle(req);
  }
}
