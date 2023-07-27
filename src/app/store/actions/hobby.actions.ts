import { createAction } from '@ngrx/store';
import { hobbyActionTypes } from '../reducers/hobby.reducer';

export const addHobbyAction = createAction(hobbyActionTypes.addHobbyAction);
