import { createAction, props } from '@ngrx/store';
import { UserModel } from 'src/app/models/user.model';

export const login = createAction('[Login Component] Login', props<{user: UserModel}>());
export const logout = createAction('[Login Component] Logout');
