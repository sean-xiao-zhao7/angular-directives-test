import { Injectable } from '@angular/core';
import { ActivatedRoute, Resolve, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserResolverService
  implements Resolve<{ name: string; email: string }>
{
  constructor() {}

  resolve(private route: ActivatedRoute, private router: Router) {}
}
