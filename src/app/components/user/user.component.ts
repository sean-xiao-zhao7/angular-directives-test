import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input() name: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  seeUserDetails(name: string) {
    this.router.navigate([name], { relativeTo: this.route });
  }

  editUser(userId: string) {
    this.router.navigate([name, 'edit'], {
      relativeTo: this.route,
      queryParams: { time: new Date().toLocaleDateString() },
      fragment: 'test',
    });
  }
}
