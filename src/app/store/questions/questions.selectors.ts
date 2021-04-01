import { createSelector } from '@ngrx/store';
import { PollState, Questions } from 'src/app/models/poll-state.model';
import { UserModel } from 'src/app/models/user.model';
import { getUser } from '../user/user.selectors';

// TODO :: rename PollStore to PollState
export const selectPollState = (state: PollState) => state;

export const getQuestions = createSelector(
  selectPollState,
  (state: PollState): Questions => state.questions
);

export const getUnansweredQuestions = createSelector(
  getQuestions, getUser,
  (questions: Questions, user: UserModel): Questions => {
    const result: Questions = Object.keys(questions)
    .filter(key => {
      return !(key in user.answers);
    })
    .reduce((acc, key) => {
        return {
          ...acc,
          [key]: questions[key]
        };
    }, {} as Questions);
    return result;
  }
);


export const getAnsweredQuestions = createSelector(
  getQuestions, getUser,
  (questions: Questions, user: UserModel): Questions => {
    const result: Questions = Object.keys(questions)
    .filter(key => {
      return key in user.answers;
    })
    .reduce((acc, key) => {
        return {
          ...acc,
          [key]: questions[key]
        };
    }, {} as Questions);
    return result;
  }
);


// export const getIsLoggedIn = createSelector(
//   getUser,
//   (user: UserModel): boolean => Boolean(user)
// );
