import { Observable } from 'rxjs';
import { LoginService } from './api/login.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShowLoginService {
  constructor(private loginService: LoginService) {}
  showlog() {
    const show = this.loginService.googleLogin();
    console.log('show',show)
    return show;
  }
}
