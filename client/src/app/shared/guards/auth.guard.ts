import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { firstValueFrom, take } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { State } from '../../state';
import { AuthService } from '../services/auth.service';
import User from '../models/user.model';
import { selectUser } from '../../state/selectors/auth.selectors';
import { loadUserSuccess } from '../../state/actions/auth.actions';

export async function getUserFromStateOrAPI(store$: Store<State>, authService: AuthService): Promise<User | undefined> {
  const stateUser = await firstValueFrom(store$.pipe(select(selectUser), take(1)));

  if (stateUser?.id) {
    return stateUser;
  }

  return authService.currentUser();
}

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private store$: Store<State>, private router: Router, private authService: AuthService) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = await getUserFromStateOrAPI(this.store$, this.authService);
    if (user && user.id) {
      this.store$.dispatch(loadUserSuccess({ user }));
      return true;
    }

    setTimeout(() => this.router.navigate(['/login']));
    return false;
  }
}
