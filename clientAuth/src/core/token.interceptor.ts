import { Injectable, Injector } from '@angular/core';
import {AuthService} from './services/auth.service'
import {
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) {}

  intercept(request, next): Observable<HttpEvent<unknown>> {
    let authService = this.injector.get(AuthService);
    let tokenReq = request.clone({
      headers: request.headers.set('Authorization', 'bearer ' + authService.getToken())
    })
    return next.handle(tokenReq);
  }
}
