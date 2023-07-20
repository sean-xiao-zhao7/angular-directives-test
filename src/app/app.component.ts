import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { BehaviorSubject } from 'rxjs';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  authedUser!: User;
  sub!: any;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.sub = this.authService.getAuthedUserBS().subscribe((user) => {
      this.authedUser = user;
    });
  }
}
