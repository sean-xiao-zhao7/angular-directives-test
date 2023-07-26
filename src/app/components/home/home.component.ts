import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { HighlightDirective } from 'src/app/directives/highlight.directive';
import { UnlessDirective } from 'src/app/directives/unless.directive';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { ShortenPipe } from 'src/app/pipes/shorten.pipe';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    HighlightDirective,
    FilterPipe,
    ShortenPipe,
    UnlessDirective,
  ],
})
export class HomeComponent implements OnInit, OnDestroy {
  title = 'Home';
  submitted: boolean = false;
  myObsSub: any;
  @ViewChild('form') myForm!: NgForm;

  // field values
  defaultUsername: string = '';
  description: string = '';
  hobbyFilter: string = '';
  hobbies: string[] = ['Biking', 'Hiking', 'Swimming'];
  status: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('online');
    }, 2000);
  });

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
    this.submitted = true;
    // this.myForm.reset();
  }

  suggestName(event: any) {
    event.preventDefault();
    this.myForm.form.patchValue({
      user: {
        username: 'Suggested name',
      },
    });
  }
}
