import { createReducer, on } from '@ngrx/store';
import { UserModel } from 'src/app/models/user.model';
import { answerQuestion, QuestionActions } from '../questions/questions.actions';
import { login, logout } from './user.actions';

export const initialState = null;

const _userReducer = createReducer(
  initialState,
  on(login, (state, props) => props.user),
  on(logout, (state) => initialState),
  on(answerQuestion, (state, props) => {
    const {questionId, selectedOption, userId} = props;
    return {
      ...state,
      answers: {
        ...state.answers,
        [questionId]: selectedOption,
      }
    };
  })
);

export function userReducer(state, action): UserModel {
  return _userReducer(state, action);
}
