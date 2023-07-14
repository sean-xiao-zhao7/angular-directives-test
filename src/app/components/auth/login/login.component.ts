import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    const authedUser = new User(
      this.loginForm.value.username,
      this.loginForm.value.password
    );
    this.loginForm.reset();
    // this.httpClient.post<Hobby>(vals.root, newHobby).subscribe((data: any) => {
    //   newHobby.fid = data.name;
    // });
  }
}
