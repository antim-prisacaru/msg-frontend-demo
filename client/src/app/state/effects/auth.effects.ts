import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { logoutUser, logoutUserSuccess } from '../actions/auth.actions';
import { switchMap, tap } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private router: Router, private authService: AuthService) {}

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
