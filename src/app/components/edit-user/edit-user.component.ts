import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit, OnDestroy {
  userId: string = '';
  time: string = '';
  private paramsSub: any;
  private queryParamsSub: Subscription;
  private allowNavAway: boolean = true;

  constructor(private route: ActivatedRoute, private router: Router) {
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

  setAllowNavAway(status: boolean) {
    this.allowNavAway = status;
  }
}
