import { createAction, props } from '@ngrx/store';


export enum UsersActions {
    setAll = '[Users] Set All Users',
}

export const setAllUsers = createAction(UsersActions.setAll, props<{users: any}>());
