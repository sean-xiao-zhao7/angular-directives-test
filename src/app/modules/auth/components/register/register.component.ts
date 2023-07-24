import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  registerForm!: FormGroup;
  sub: any;
  loading: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl('FormControl', Validators.required),
      password: new FormControl('FormControl', Validators.required),
      email: new FormControl('test@test.com', [
        Validators.required,
        Validators.email,
      ]),
    });
  }

  onSubmit() {
    this.loading = true;
    const registerUser = new User(
      this.registerForm.value.username,
      this.registerForm.value.email,
      this.registerForm.value.password
    );
    this.sub = this.authService.register(registerUser).subscribe(
      (data: any) => {
        this.loading = false;
      },
      (errorMessage: any) => {
        alert(`Error: ${errorMessage}`);
        this.loading = false;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}