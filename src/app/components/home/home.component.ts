import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  title = 'Home';
  myObs: any;

  ngOnInit(): void {
    this.myObs = Observable.create((observer: any) => {
      let count = 0;
      setInterval(() => {
        if (count > 3) {
          // observer.error(new Error('Greater than 3!'));
          observer.complete();
        } else {
          observer.next(count);
          count++;
        }
      }, 1000);
    });

    this.myObs.subscribe(
      (count: any) => {
        console.log(count);
      },
      (error: any) => {
        console.log(error.message);
      },
      () => {
        console.log('Completed.');
      }
    );
  }

  ngOnDestroy(): void {
    this.myObs.unsubscribe();
  }
}
