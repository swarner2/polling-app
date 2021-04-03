import { Action, createReducer, on } from '@ngrx/store';
import { UsersModel } from 'src/app/models/user.model';
import { login, logout } from './login.actions';

export const initialState = null;

const _loginReducer = createReducer<string, Action>(
  initialState,
  on(login, (state, props) => props.user.id),
  on(logout, (state) => initialState)
);

export function loginReducer(state: string, action): string {
  return _loginReducer(state, action);
}
