import { createReducer, on } from '@ngrx/store';
import User from '../../shared/models/user.model';
import * as AuthActions from '../actions/auth.actions';

export const authFeatureKey = 'auth';

export interface AuthState {
  user?: User;
}

export const initialState: AuthState = {
  user: undefined,
};

export const reducer = createReducer(
  initialState,
  on(AuthActions.loadUser, () => initialState),
  on(AuthActions.loadUserSuccess, (state: AuthState, { user }) => ({
    user,
  })),
  on(AuthActions.logoutUserSuccess, () => initialState)
);
