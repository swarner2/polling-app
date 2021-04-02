import { createSelector } from '@ngrx/store';
import { PollState, Questions } from 'src/app/models/poll-state.model';
import { OptionStatsModel, QuestionModel, QuestionOptionStatsModel } from 'src/app/models/question.model';
import { UserModel } from 'src/app/models/user.model';
import { getUser } from '../user/user.selectors';

// TODO :: rename PollStore to PollState
export const selectPollState = (state: PollState) => state;

export const getQuestions = createSelector(
  selectPollState,
  (state: PollState): Questions => state.questions
);

export const getQuestion = createSelector(
  getQuestions,
  (questions: Questions, props: {questionId: string}): QuestionModel => questions[props.questionId]
);


export const getUnansweredQuestions = createSelector(
  getQuestions, getUser,
  (questions: Questions, user: UserModel): Questions => {
    if (user === null) {
      return null;
    }
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
    if (user === null) {
      return null;
    }
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

export const getIsQuestionAnsweredByUser = createSelector(
  getQuestion,
  getUser,
  (question: QuestionModel, user: UserModel): boolean => question.id in (user?.answers || [])
);

export const getQuestionOptionStats = createSelector(
  getQuestion,
  getUser,
  (question: QuestionModel, user: UserModel): QuestionOptionStatsModel => new QuestionOptionStatsModel(question, user)
);
