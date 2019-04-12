import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-username-logout',
  templateUrl: './username-logout.component.html',
  styleUrls: ['./username-logout.component.scss']
})
export class UsernameLogoutComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
