import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = new BehaviorSubject(false);
  loggedObservable = this.loggedIn.asObservable();

  constructor(private http: HttpClient, private router: Router) {
  }

  getLogin(email: string, password: string): void {
    const body = {
      email,
      password
    };
    this.http.post('http://localhost:8051/login', body)
      .subscribe((resp: any) => {
        this.loggedIn.next(true);
        localStorage.setItem('auth', resp.result.token);
        this.router.navigate(['profile']);
      });
  }

  getLogout(): void {
    localStorage.removeItem('auth');
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
}
