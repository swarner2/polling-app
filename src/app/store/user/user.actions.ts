import { createAction, props } from '@ngrx/store';
import { UserModel } from 'src/app/models/user.model';


export enum UserActions {
    login = '[Login Component] Login',
    logout = '[Login Component] Logout'
}

export const login = createAction(UserActions.login, props<{user: UserModel}>());
export const logout = createAction(UserActions.logout);
