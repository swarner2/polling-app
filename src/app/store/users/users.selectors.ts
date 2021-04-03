import { createSelector } from '@ngrx/store';
import { PollState } from 'src/app/models/poll-state.model';
import { UserModel, UsersModel } from 'src/app/models/user.model';
import { getUserId } from '../login/login.selectors';

export const selectPollState = (state: PollState) => state;

export const getAllUsers = createSelector(
  selectPollState,
  (state: PollState): UsersModel => state.users
);

export const getUser = createSelector(
  getAllUsers,
  getUserId,
  (users: UsersModel, userId: string): UserModel => users[userId]
);

