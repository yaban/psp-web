import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType,  Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import {
  LoginPageActions,
  AuthActions
} from '../actions';
import { Credentials } from '../models';
import { AuthService } from '../services';

@Injectable()
export class AuthEffects {

  @Effect()
  login$ = this.actions$.pipe(
    ofType(LoginPageActions.login.type),
    map(action => action.credentials),
    exhaustMap((auth: Credentials) =>
      this.authService.login(auth).pipe(
        map(token => {
          localStorage.setItem('token', token.token);
         return AuthActions.loginSuccess({ token });
        }),
        catchError(err =>
          of(AuthActions.loginFailure({ error: err.error }))
        )
       )
    )
  );

  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$.pipe(
    ofType(AuthActions.loginSuccess.type),
    tap(() => this.router.navigate(['/']))
  );

  @Effect({ dispatch: false })
  loginRedirect$ = this.actions$.pipe(
    ofType(AuthActions.loginRedirect.type),
    tap(authed => {
      this.router.navigate(['/login']);
    })
  );


  constructor(
    private actions$: Actions<LoginPageActions.LoginPageActionsUnion>,
    private authService: AuthService,
    private router: Router
  ) {}
}
