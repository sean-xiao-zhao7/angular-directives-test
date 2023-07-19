import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm!: FormGroup;
  sub: any;
  showModal: boolean = true;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('test@test.com', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    const loginUser = new User(
      this.loginForm.value.username,
      this.loginForm.value.username,
      this.loginForm.value.password
    );
    this.loginForm.reset();
    this.sub = this.authService.authenticate(loginUser).subscribe(
      (response) => {
        console.log(response);
      },
      (errorMessage) => {
        alert(errorMessage);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
