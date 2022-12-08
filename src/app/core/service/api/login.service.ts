import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  googleLogin() {
    // return window.location.href=('http://localhost:3000/auth/google')
    const back = this.http.get('http://localhost:3000/auth/google');
    console.log('back', back);
    return back;
  }
}
