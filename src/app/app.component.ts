import { LoginService } from './core/service/api/login.service';
import { ShowLoginService } from './core/service/show-login.service';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angularGooleLogin';
  con!: number;

  constructor(
    private showLoginService: ShowLoginService,
    private loginService: LoginService,
    private http: HttpClient
  ) {}
  showlist() {
    // const googlelog = this.loginService.googleLogin();
    // this.loginService.googleLogin().subscribe((data) => {
    //   console.log('data', data);
    // });
    console.log('in')
    this.http.get('http://localhost:4200/auth/google').subscribe((data) => {
      console.log(data);
    });
    // console.log('tt', tempgoogle);
    // const tempgoogle = this.showLoginService.showlog().subscribe((data) => {
    //   console.log('data', data);
    // });
  }
}
