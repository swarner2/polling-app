import { createReducer, on } from '@ngrx/store';
import { UserModel } from 'src/app/models/user.model';
import { login, logout } from './user.actions';

export const initialState = null;

const _userReducer = createReducer(
  initialState,
  on(login, (state, props) => props.user),
  on(logout, (state) => initialState),
);

export function userReducer(state, action): UserModel {
  return _userReducer(state, action);
}
