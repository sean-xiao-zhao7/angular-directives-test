import { Actions, createEffect, ofType } from '@ngrx/effects';
import { addHobbyListAction } from '../actions/hobby.actions';
import { tap } from 'rxjs/operators';

export class HobbyEffects {
  saveEffects$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(addHobbyListAction),
        tap((action) => {
          console.log('got here');
          localStorage.setItem('hobbies', action.hobbies[0].name);
        })
      );
    },
    { dispatch: false }
  );

  constructor(private actions$: Actions) {}
}
