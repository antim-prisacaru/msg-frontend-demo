import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {login, loginSuccess, logoutUser, logoutUserSuccess} from '../actions/auth.actions';
import { switchMap, tap } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private router: Router, private authService: AuthService) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      tap(({ username, password }) => this.authService.login({ username, password })),
      switchMap(async () => loginSuccess())
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccess),
        tap(async () => {
          this.router.navigate(['/login']);
        })
      ),
    {
      dispatch: false,
    }
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logoutUser),
      tap(async () => await this.authService.logout()),
      switchMap(async () => logoutUserSuccess())
    )
  );

  logoutSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logoutUserSuccess),
        tap(async () => await this.router.navigate(['/login']))
      ),
    {
      dispatch: false,
    }
  );
}
