import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Hobby } from 'src/app/models/hobby';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css'],
})
export class HobbyComponent implements OnInit {
  form!: FormGroup;
  types: string[] = ['fun', 'learn', 'train', 'maintain', 'expand'];
  hobby!: Hobby;

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      imageUrl: new FormControl('', Validators.required),
      type: new FormControl(this.types[0], Validators.required),
    });
  }

  onSubmit() {
    this.hobby = new Hobby(
      this.form.value.name,
      this.form.value.description,
      this.form.value.imageUrl,
      this.form.value.type
    );
    this.form.reset();
    alert('Submitted!');
  }
}
