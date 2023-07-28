import { Actions, createEffect, ofType } from '@ngrx/effects';
import { addHobbyListAction } from '../actions/hobby.actions';
import { tap } from 'rxjs/operators';

export class HobbyEffects {
  saveEffects = createEffect(() => {
    return this.actions$.pipe(
      ofType(addHobbyListAction),
      tap((action) => {
        localStorage.setItem('hobbies', action.hobbies[0].name);
      })
    );
  });

  constructor(private actions$: Actions) {}
}
