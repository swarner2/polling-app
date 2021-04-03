import { createAction, props } from '@ngrx/store';
import { UserModel } from 'src/app/models/user.model';


export enum LoginActions {
    login = '[Login Component] Login',
    logout = '[Login Component] Logout'
}

export const login = createAction(LoginActions.login, props<{user: UserModel}>());
export const logout = createAction(LoginActions.logout);
