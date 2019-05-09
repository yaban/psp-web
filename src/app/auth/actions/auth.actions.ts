import { props, createAction } from '@ngrx/store';
import { Token } from '../models';
import {ApiError} from '../../core/model/ApiError';

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ token: Token }>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: ApiError }>()
);


export const loginRedirect = createAction('[Auth] Login Redirect');



export type AuthApiActionsUnion = ReturnType< typeof loginSuccess | typeof loginFailure | typeof loginRedirect > ;
