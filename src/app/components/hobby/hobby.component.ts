import { Component, OnInit } from '@angular/core';
import {
  AsyncValidatorFn,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Hobby } from 'src/app/models/hobby';

import { vals } from '../../../vals';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css'],
})
export class HobbyComponent implements OnInit {
  form!: FormGroup;
  types: string[] = ['fun', 'learn', 'train', 'maintain', 'expand'];
  hobbies: Hobby[] = [];
  badHobbies: string[] = ['4', '3'];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(
        '',
        [Validators.required],
        <AsyncValidatorFn>this.usernameDupValidatorAsync.bind(this)
      ),
      description: new FormControl('', Validators.required),
      imageUrl: new FormControl('', Validators.required),
      type: new FormControl(this.types[0], Validators.required),
      social: new FormArray([]),
    });

    // get data
    this.httpClient.get(vals.root).subscribe((data: any) => {
      for (const key in data) {
        this.hobbies.push(
          new Hobby(
            data[key].name,
            data[key].description,
            data[key].imageUrl,
            data[key].type,
            data[key].social
          )
        );
      }
    });
  }

  onSubmit() {
    const newHobby = new Hobby(
      this.form.value.name,
      this.form.value.description,
      this.form.value.imageUrl,
      this.form.value.type,
      this.form.value.social
    );
    this.hobbies.push(newHobby);
    this.form.reset();
    alert('Submitted!');
    this.httpClient.post(vals.root, newHobby).subscribe((data) => {});
  }

  onAddSocial() {
    const socialTextControl = new FormControl('');
    (<FormArray>this.form.get('social')).push(socialTextControl);
  }

  getSocialControls() {
    return (<FormArray>this.form.get('social')).controls;
  }

  badHobbyValidator(control: FormControl): { [s: string]: boolean } | null {
    if (this.badHobbies.indexOf(control.value) >= 0) {
      return { badHobby: true };
    } else {
      return null;
    }
  }

  usernameDupValidatorAsync(
    control: FormControl
  ):
    | Promise<{ [s: string]: boolean } | null>
    | Observable<{ [s: string]: boolean } | null> {
    return new Promise<{ [s: string]: boolean } | null>((resolve, reject) => {
      if (this.badHobbies.indexOf(control.value) >= 0) {
        resolve({ badHobby: true });
      } else {
        resolve(null);
      }
    });
  }
}
