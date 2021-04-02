import { createReducer, on, select } from '@ngrx/store';
import { Questions } from 'src/app/models/poll-state.model';
import { QuestionModel } from 'src/app/models/question.model';
import { answerQuestion, setAllQuestions } from './questions.actions';

export const initialState = null;

const _questionsReducer = createReducer(
  initialState,
  on(setAllQuestions, (state, props) => props.questions),
  on(answerQuestion, (state, props) => {
    const {questionId, selectedOption, userId} = props;
    const targetQuestion =  new QuestionModel({
      ...state[questionId],
      [selectedOption]: {
        ...state[questionId][selectedOption],
        votes: [...state[questionId][selectedOption].votes, userId]
      }
    });
    return {...state, [questionId]: targetQuestion};
  })
);

export function questionsReducer(state, action): Questions {
  return _questionsReducer(state, action);
}
