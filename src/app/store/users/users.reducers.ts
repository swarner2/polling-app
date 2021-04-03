import { Action, createReducer, on } from '@ngrx/store';
import { UserModel, UsersModel } from 'src/app/models/user.model';
import { answerQuestion } from '../questions/questions.actions';
import { setAllUsers } from './users.actions';

export const initialState = null;

const _usersReducer = createReducer<UsersModel, Action>(
  initialState,
  on(setAllUsers, (state, props) => props.users ),
  on(answerQuestion, (state, props) => {
    const {questionId, selectedOption, userId} = props;
    return {
      ...state,
      [userId]: new UserModel({
        ...state[userId],
        answers: {
          ...state[userId].answers,
          [questionId]: selectedOption,
        }
      })

    };
  })
);

export function usersReducer(state: UsersModel, action): UsersModel {
  return _usersReducer(state, action);
}
