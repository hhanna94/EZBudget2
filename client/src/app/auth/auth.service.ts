import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';
import { LoginUser } from '../shared/models/login-user.interface';
import { RegisterUser } from '../shared/models/register-user.interface';
import { UserToken } from '../shared/models/user-token.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<UserToken>(null);
  expirationTimer: any;
  isAuthenticated = false;

  constructor(private http: HttpClient, private router: Router) { }

  getIsAuth() {
    return this.isAuthenticated;
  }

  loginUser(user: LoginUser) {
    return this.http
      .post<UserToken>('http://localhost:5000/api/users/login', user)
      .pipe(
        tap( (resData) => {
          this.handleAuthentication(resData);
        })
      )
  }

  registerUser(user: RegisterUser) {
    return this.http
      .post<UserToken>('http://localhost:5000/api/users/register', user)
      .pipe(
        tap( (resData) => {
          this.handleAuthentication(resData);
        })
      )
  }

  logout() {
    this.user.next(null);
    this.isAuthenticated = false;
    this.router.navigateByUrl('/login');
    localStorage.clear();
    if (this.expirationTimer) {
      clearTimeout(this.expirationTimer);
    };
    this.expirationTimer = null;
  }

  private handleAuthentication(userToken: UserToken) {
    const expirationDate = new Date(new Date().getTime() + (604800 * 1000))
    const user = new UserToken(userToken.userName, userToken.token, expirationDate);
    this.user.next(user);
    this.autoLogout(604800 * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
    this.isAuthenticated = true;
  }

  autoLogout(expirationDuration: number) {
    this.expirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  autoLogin() {
    const userData: UserToken = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      this.isAuthenticated = false;
      return;
    }

    const loadedUser = new UserToken(
      userData.userName,
      userData.token,
      new Date(userData.expirationDate)
    );

    if (loadedUser.token) {
      this.user.next(loadedUser);
      const expirationDuration = new Date(userData.expirationDate).getTime() - new Date().getTime();
      this.autoLogout(expirationDuration);
    }
    this.isAuthenticated = true;
  }
}
