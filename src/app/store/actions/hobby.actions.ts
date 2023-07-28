import { createAction, props } from '@ngrx/store';
import { Hobby } from 'src/app/models/hobby';

export const hobbyActionTypes = {
  addHobbyAction: '[Hobby] addHobbyAction',
  addHobbyListAction: '[Hobby] addHobbyListAction',
};

export const addHobbyAction = createAction(
  hobbyActionTypes.addHobbyAction,
  props<{ hobby: Hobby }>()
);

export const addHobbyListAction = createAction(
  hobbyActionTypes.addHobbyListAction,
  props<{ hobbies: Hobby[] }>()
);
