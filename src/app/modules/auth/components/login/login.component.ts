import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UIModule } from 'src/app/modules/ui/ui.module';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, UIModule],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm!: UntypedFormGroup;
  sub: any;
  showModal: boolean = false;
  loggedInMessage!: string;
  loading: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = new UntypedFormGroup({
      username: new UntypedFormControl('test@test.com', Validators.required),
      password: new UntypedFormControl('', Validators.required),
    });
  }

  onSubmit() {
    this.loading = true;
    const loginUser = new User(
      this.loginForm.value.username,
      this.loginForm.value.username,
      this.loginForm.value.password
    );
    this.sub = this.authService.authenticate(loginUser).subscribe(
      (response) => {
        this.loggedInMessage = response.email;
        this.showModal = true;
        this.loginForm.reset();
        setTimeout(() => {
          this.loading = false;
          this.router.navigate(['/']);
        }, 1000);
      },
      (errorMessage) => {
        alert(errorMessage);
        this.loading = false;
      }
    );
  }

  closeModal() {
    this.showModal = false;
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
