import { createReducer, on } from '@ngrx/store';
import { Hobby } from 'src/app/models/hobby';
import { addHobbyAction } from '../actions/hobby.actions';

const initialState: Hobby[] = [];

export const hobbyReducer = createReducer(
  initialState,
  on(addHobbyAction, (state: Hobby[]) => {
    const newState = [...state];
    return newState;
  })
);
