import { ActionReducer } from '@ngrx/store';
import { Hobby } from '../models/hobby';

export interface store {
  hobbyReducer: ActionReducer<Hobby[]>;
}
