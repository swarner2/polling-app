import { Action, createReducer, on } from '@ngrx/store';
import { QuestionModel, QuestionsModel } from 'src/app/models/question.model';
import { addQuestion, answerQuestion, setAllQuestions } from './questions.actions';

export const initialState = null;

const _questionsReducer = createReducer<QuestionsModel, Action>(
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
  }),
 on(addQuestion, (state, props) => {
  const { question } = props;
  return {...state, [question.id]: question };
 })
);

export function questionsReducer(state, action): QuestionsModel {
  return _questionsReducer(state, action);
}
