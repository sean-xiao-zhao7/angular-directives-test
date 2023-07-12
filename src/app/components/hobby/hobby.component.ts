import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
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
}
