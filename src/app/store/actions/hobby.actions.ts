import { createAction } from '@ngrx/store';

export const hobbyActionTypes = { addHobbyAction: '[Hobby] addHobbyAction' };

export const addHobbyAction = createAction(hobbyActionTypes.addHobbyAction);
