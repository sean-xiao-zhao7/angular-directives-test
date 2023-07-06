import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'Home';

  ngOnInit(): void {
    // interval(1000).subscribe((count) => {
    //   // console.log(count);
    // });
  }
}
