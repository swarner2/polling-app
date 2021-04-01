import { createSelector } from '@ngrx/store';
import { PollState } from 'src/app/models/poll-store.model';
import { UserModel } from 'src/app/models/user.model';

// TODO :: rename PollStore to PollState
export const selectPollState = (state: PollState) => state;

export const getUser = createSelector(
  selectPollState,
  (state: PollState): UserModel => state.user
);

export const getIsLoggedIn = createSelector(
  getUser,
  (user: UserModel): boolean => Boolean(user)
);
