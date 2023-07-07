import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'Home';
  myObs: any;

  ngOnInit(): void {
    this.myObs = Observable.create((observer: any) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++;
      }, 1000);
    });

    this.myObs.subscribe((count: any) => {
      console.log(count);
    });
  }
}
