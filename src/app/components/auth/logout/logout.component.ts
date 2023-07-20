import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  constructor(private authService: AuthService) {
    this.authService.unauthenticate();
  }

  ngOnInit(): void {}

  logout() {
    this.authService.unauthenticate();
  }
}
