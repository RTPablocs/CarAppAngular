import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) {
  }

  getLogin(email: string, password: string): void {
    this.http.post('http://localhost:5000/api/authenticate', {email: email, password: password})
      .subscribe((resp: any) => {
        localStorage.setItem('auth', resp.token);
        this.router.navigate(['profile']);
      });
  }

  getLogout(): void {
    localStorage.removeItem('auth');
  }

  isLogged(): boolean {
    return localStorage.getItem('auth') !== null;
  }
}
