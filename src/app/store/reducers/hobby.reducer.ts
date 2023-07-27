import { createReducer } from '@ngrx/store';
import { Hobby } from 'src/app/models/hobby';

const initialState: Hobby[] = [];

export const hobbyReducer = createReducer(initialState);

export const hobbyActionTypes = { addHobbyAction: '[Hobby] addHobbyAction' };
