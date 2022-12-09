import { LoginService } from './core/service/api/login.service';
import { ShowLoginService } from './core/service/show-login.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angularGooleLogin';
  con!: number;
  show = '';
  constructor(
    private showLoginService: ShowLoginService,
    private loginService: LoginService,
    private http: HttpClient
  ) {}
  ngOnInit(): void {
    const s = window.location.search;
    if (s) {
      let a = s.split('?');
      let b =decodeURIComponent(a[1]).split('&');
      b.forEach((x, i) => {
        console.log('b', b[i]);
        this.show += b[i].split('=')+'<br>';

      });
    }
  }
  showlist() {
    window.location.href = 'http://localhost:3000/auth/google';

    // const googlelog = this.loginService.googleLogin();
    // this.loginService.googleLogin().subscribe((data) => {
    //   console.log('data', data);
    // });
    // console.log('in')
    // this.http.get('http://localhost:4200/auth/google').subscribe((data) => {
    //   console.log(data);
    // });
    // console.log('tt', tempgoogle);
    // const tempgoogle = this.showLoginService.showlog().subscribe((data) => {
    //   console.log('data', data);
    // });
  }
}
