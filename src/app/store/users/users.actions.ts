import { createAction, props } from '@ngrx/store';
import { UserModel } from 'src/app/models/user.model';


export enum UsersActions {
    setAll = '[Users] Set All Users',
    addUser = '[Create Account] Add User'
}

export const setAllUsers = createAction(UsersActions.setAll, props<{users: any}>());

export const addUser = createAction(UsersActions.addUser, props<{name: string, avatarURL: string}>());
