import { createSelector } from '@ngrx/store';
import { PollState } from 'src/app/models/poll-state.model';
import { QuestionModel, QuestionOptionStatsModel, QuestionsModel } from 'src/app/models/question.model';
import { UserModel, UsersModel } from 'src/app/models/user.model';
import { getAllUsers, getUser } from '../users/users.selectors';

export const selectPollState = (state: PollState) => state;

export const getQuestions = createSelector(
  selectPollState,
  (state: PollState): QuestionsModel => state.questions
);

export const getQuestion = createSelector(
  getQuestions,
  (questions: QuestionsModel, props: {questionId: string}): QuestionModel => questions[props.questionId]
);


export const getUnansweredQuestions = createSelector(
  getQuestions, getUser,
  (questions: QuestionsModel, user: UserModel): QuestionsModel => {
    if (user === null) {
      return null;
    }
    const result: QuestionsModel = Object.keys(questions)
    .filter(key => {
      return !(key in (user?.answers || []));
    })
    .reduce((acc, key) => {
        return {
          ...acc,
          [key]: questions[key]
        };
    }, {} as QuestionsModel);
    return result;
  }
);


export const getAnsweredQuestions = createSelector(
  getQuestions, getUser,
  (questions: QuestionsModel, user: UserModel): QuestionsModel => {
    if (user === null) {
      return null;
    }
    const result: QuestionsModel = Object.keys(questions)
    .filter(key => {
      return key in (user?.answers || []);
    })
    .reduce((acc, key) => {
        return {
          ...acc,
          [key]: questions[key]
        };
    }, {} as QuestionsModel);
    return result;
  }
);

export const getIsQuestionAnsweredByUser = createSelector(
  getQuestion,
  getUser,
  (question: QuestionModel, user: UserModel): boolean => question?.id in (user?.answers || [])
);

export const getQuestionOptionStats = createSelector(
  getQuestion,
  getUser,
  (question: QuestionModel, user: UserModel): QuestionOptionStatsModel => new QuestionOptionStatsModel(question, user)
);

export const getQuestionAuthor = createSelector(
  getQuestion,
  getAllUsers,
  (question: QuestionModel, users: UsersModel): UserModel => users[question?.author]
);