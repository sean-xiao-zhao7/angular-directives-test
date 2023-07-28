import { createReducer, on } from '@ngrx/store';
import { Hobby } from 'src/app/models/hobby';
import { addHobbyAction, addHobbyListAction } from '../actions/hobby.actions';

const initialState: Hobby[] = [];

export const hobbyReducer = createReducer(
  initialState,
  on(addHobbyAction, (state: Hobby[], action) => {
    const newState = [...state, action.hobby];
    return newState;
  }),
  on(addHobbyListAction, (state: Hobby[], action) => {
    const newState = [...state, ...action.hobbies];
    return newState;
  })
);
