import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { LoginInfoService } from 'src/app/services/users/login-info.service';

@Component({
  selector: 'app-username-logout',
  templateUrl: './username-logout.component.html',
  styleUrls: ['./username-logout.component.scss']
})
export class UsernameLogoutComponent implements OnInit {
  private username: string;

  constructor(private authService: AuthService,
    private router: Router,
    private loginInfoService: LoginInfoService
  ) {
    this.loginInfoService.getUsername().subscribe((data) => { 
      this.username = data;
      // console.log(data);
    })
  }

  ngOnInit() {
  }

  logout(): void {
    this.username = "";
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
