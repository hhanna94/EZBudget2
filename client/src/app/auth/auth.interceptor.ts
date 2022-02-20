import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const authToken = userData?.token;
    const authRequest = request.clone({
      // Adds a new header that holds the token
      headers: request.headers.set('Authorization', "Bearer " + authToken)
    });
    return next.handle(authRequest);
  }
}
