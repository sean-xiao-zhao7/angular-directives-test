import { Component, OnInit, Signal, signal } from '@angular/core';
import {
  AsyncValidatorFn,
  ReactiveFormsModule,
  UntypedFormArray,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Hobby } from 'src/app/models/hobby';
import { HobbyObject } from 'src/app/interfaces/hobby';
import { vals } from '../../../../../vals';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-hobby',
  templateUrl: './hobby-signal.component.html',
  styleUrls: ['./hobby-signal.component.css'],
  imports: [ReactiveFormsModule, CommonModule],
})
export class HobbySignalComponent implements OnInit {
  form!: UntypedFormGroup;
  types: any = signal(['fun', 'learn', 'train', 'maintain', 'expand']);
  hobbies: any = signal<Hobby[]>([]);
  badHobbies: string[] = ['4', '3'];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.form = new UntypedFormGroup({
      name: new UntypedFormControl(
        '',
        [Validators.required],
        <AsyncValidatorFn>this.usernameDupValidatorAsync.bind(this)
      ),
      description: new UntypedFormControl('', Validators.required),
      imageUrl: new UntypedFormControl('', Validators.required),
      type: new UntypedFormControl(this.types()[0], Validators.required),
      social: new UntypedFormArray([]),
    });

    // get data
    this.httpClient
      .get<{ [key: string]: HobbyObject }>(vals.root)
      .pipe(
        map((data: { [key: string]: HobbyObject }) => {
          const hobbies = [];
          for (const key in data) {
            hobbies.push(
              new Hobby(
                data[key].name,
                data[key].description,
                data[key].imageUrl,
                data[key].type,
                data[key].social,
                key
              )
            );
          }
          return hobbies;
        })
      )
      .subscribe((data: Hobby[]) => {
        this.hobbies.set(data);
        console.log(this.hobbies());
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
    this.hobbies.mutate((hobbies: Hobby[]) => hobbies.push(newHobby));
    this.form.reset();
    alert('Submitted!');
    this.httpClient.post<Hobby>(vals.root, newHobby).subscribe((data: any) => {
      newHobby.fid = data.name;
    });
  }

  onAddSocial() {
    const socialTextControl = new UntypedFormControl('');
    (<UntypedFormArray>this.form.get('social')).push(socialTextControl);
  }

  getSocialControls() {
    return (<UntypedFormArray>this.form.get('social')).controls;
  }

  badHobbyValidator(
    control: UntypedFormControl
  ): { [s: string]: boolean } | null {
    if (this.badHobbies.indexOf(control.value) >= 0) {
      return { badHobby: true };
    } else {
      return null;
    }
  }

  usernameDupValidatorAsync(
    control: UntypedFormControl
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
