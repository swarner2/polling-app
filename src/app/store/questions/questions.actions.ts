import { createAction, props } from '@ngrx/store';
import { OptionId, QuestionModel, QuestionsModel } from 'src/app/models/question.model';

export enum QuestionActions {
    setAllQuestions = '[Questions] Set All',
    answerQuestion = '[Questions] Answer Question',
    addQuestion = '[Questions] Add Question'
}

export const setAllQuestions = createAction(QuestionActions.setAllQuestions, props<{questions: QuestionsModel}>());
export const answerQuestion = createAction(
    QuestionActions.answerQuestion,
    props<{questionId: string, selectedOption: OptionId, userId: string}>()
    );
export const addQuestion = createAction(QuestionActions.addQuestion, props<{question: QuestionModel}>());
