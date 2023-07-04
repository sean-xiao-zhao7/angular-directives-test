import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit, OnDestroy {
  userId: string = '';
  time: string = '';
  paramsSub: any;
  queryParamsSub: Subscription;

  constructor(private route: ActivatedRoute) {
    this.paramsSub = this.route.params.subscribe((params) => {
      this.userId = params['userId'];
    });
    this.queryParamsSub = this.route.queryParams.subscribe((queryParams) => {
      this.time = queryParams['time'];
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.paramsSub.unsubscribe();
    this.queryParamsSub.unsubscribe();
  }
}
