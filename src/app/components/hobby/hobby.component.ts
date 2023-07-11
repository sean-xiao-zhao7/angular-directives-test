import { Component, OnInit } from '@angular/core';
import { Hobby } from 'src/app/models/hobby';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css'],
})
export class HobbyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  addHobby() {
    new Hobby('', '', '', '');
  }
}
