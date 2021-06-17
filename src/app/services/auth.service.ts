import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import {GoogleLoginProvider, SocialAuthService, SocialUser} from 'angularx-social-login';
import {User} from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = new BehaviorSubject(false);
  loggedObservable = this.loggedIn.asObservable();
  socialUser = new SocialUser();

  constructor(private http: HttpClient, private router: Router, public socialAuth: SocialAuthService) {
  }

  getLogin(email: string, password: string): void {
    const body = {
      email,
      password
    };
    this.http.post('http://localhost:8051/login', body)
      .subscribe((resp: any) => {
        this.loggedIn.next(true);
        localStorage.setItem('auth', resp.result);
        this.router.navigate(['profile']);
      });
  }

  getUserInfo(): void {
  }


  getLogout(): void {
    localStorage.removeItem('auth');
    this.router.navigate(['/']);
  }

  isLogged(): boolean {
    return localStorage.getItem('auth') !== null;
  }

  registerUser(body: object): void {
    this.http.post('http://localhost:8051/register', body)
      .subscribe((resp: any) => {
          this.router.navigate(['home']);
        }
      );
  }

  getGoogleLogin(): void {
    this.socialAuth.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(res => {
        localStorage.setItem('auth', res.authToken);
        this.socialUser = res;
        this.loggedIn.next(true);
        this.router.navigate(['profile']);
      });
  }
}
