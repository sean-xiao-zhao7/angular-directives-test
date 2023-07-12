import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Hobby } from 'src/app/models/hobby';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css'],
})
export class HobbyComponent implements OnInit {
  form!: FormGroup;
  types: string[] = ['fun', 'learn', 'train', 'maintain', 'expand'];
  hobbies: Hobby[] = [];
  badHobbies: string[] = ['1', '2'];

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        this.badHobbyValidator.bind(this),
      ]),
      description: new FormControl('', Validators.required),
      imageUrl: new FormControl('', Validators.required),
      type: new FormControl(this.types[0], Validators.required),
      social: new FormArray([]),
    });
  }

  onSubmit() {
    this.hobbies.push(
      new Hobby(
        this.form.value.name,
        this.form.value.description,
        this.form.value.imageUrl,
        this.form.value.type,
        this.form.value.social
      )
    );
    this.form.reset();
    alert('Submitted!');
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
