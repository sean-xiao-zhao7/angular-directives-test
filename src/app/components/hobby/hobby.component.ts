import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
      name: new FormControl(''),
      description: new FormControl(''),
      imageUrl: new FormControl(''),
      type: new FormControl(this.types[0]),
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
