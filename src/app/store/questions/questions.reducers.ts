import { createReducer, on } from '@ngrx/store';
import { Questions } from 'src/app/models/poll-state.model';
import { setAllQuestions } from './questions.actions';

export const initialState = null;

const _questionsReducer = createReducer(
  initialState,
  on(setAllQuestions, (state, props) => props.questions),
);

export function questionsReducer(state, action): Questions {
  return _questionsReducer(state, action);
}
