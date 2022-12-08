import { LoginService } from './core/service/api/login.service';
import { ShowLoginService } from './core/service/show-login.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

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
    private loginService: LoginService
  ) {}
  showlist() {
    // const googlelog = this.loginService.googleLogin();
    const tempgoogle = this.showLoginService.showlog()
    console.log('tt',tempgoogle)
    // const tempgoogle = this.showLoginService.showlog().subscribe((data) => {
    //   console.log('data', data);
    // });
  }
}
