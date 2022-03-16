import { createAction, props } from '@ngrx/store';
import User from '../../shared/models/user.model';

export const login = createAction('[Auth] Login', props<{ username: string, password: string }>());

export const loginSuccess = createAction('[Auth] Login Success');

export const loadUser = createAction('[Auth] Load User');

export const loadUserSuccess = createAction('[Auth] Load Auths Success', props<{ user: User }>());

export const loadUserFailure = createAction('[Auth] Load Auths Failure', props<{ error: string }>());

export const logoutUser = createAction('[Auth] Logout');

export const logoutUserSuccess = createAction('[Auth] Logout Success');
