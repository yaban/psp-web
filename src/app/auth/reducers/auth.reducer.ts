import { createReducer, on } from '@ngrx/store';
import { AuthActions } from '../actions';
import { Token } from '../models';

export interface State {
  token: Token | null;
}

export const initialState: State = {
  token: localStorage.getItem('token') ? localStorage.getItem('token') : null
};

export const reducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, { token }) => ({ ...state, token })),
);

export const getToken = (state: State) => state.token;
