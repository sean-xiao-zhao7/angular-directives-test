import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  title = 'Home';
  myObsSub: any;
  @ViewChild('form') myForm!: NgForm;

  // field values
  defaultUsername: string = 'Test';
  description: string = '';
  hobbies: string[] = ['Biking', 'Hiking', 'Swimming'];

  ngOnInit(): void {
    const myObs = Observable.create((observer: any) => {
      let count = 0;
      setInterval(() => {
        if (count + 1 > 3) {
          // observer.error(new Error('Greater than 3!'));
          observer.complete();
        } else {
          observer.next(count);
          count++;
        }
      }, 1000);
    });

    this.myObsSub = myObs
      .pipe(
        filter((data: number) => {
          return (data + 1) % 2 != 0;
        }),
        map((data: number) => {
          return `Round ${data + 1}`;
        })
      )
      .subscribe(
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
    this.myObsSub.unsubscribe();
  }

  onSubmit() {
    console.log(this.myForm.controls);
  }
}
