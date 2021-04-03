import { createSelector } from '@ngrx/store';
import { PollState } from 'src/app/models/poll-state.model';

export const selectPollState = (state: PollState) => state;

export const getUserId = createSelector(
  selectPollState,
  (state: PollState): string => state.userId
);

export const getIsLoggedIn = createSelector(
  getUserId,
  (userId: string): boolean => Boolean(userId)
);
