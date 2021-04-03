import { Action, createReducer, on } from '@ngrx/store';
import { UserModel, UsersModel } from 'src/app/models/user.model';
import { addQuestion, answerQuestion } from '../questions/questions.actions';
import { addUser, setAllUsers } from './users.actions';

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
  }),
  on(addQuestion, (state, props) => {
    const { question } = props;
    return {
      ...state,
      [question.author]: new UserModel({
        ...state[question.author],
        questions: [
          ...state[question.author].questions,
          question.id
        ]
      })
    };
  }),
  on(addUser, (state, props) => {
    const {name, avatarURL} = props;
    const user = new UserModel({
      name,
      avatarURL,
      id: name.toLowerCase().replace(' ', ''),
      questions: [],
      answers: {}
    });
    return {
      ...state,
      [user.id] : user
    };
  })
);

export function usersReducer(state: UsersModel, action): UsersModel {
  return _usersReducer(state, action);
}
