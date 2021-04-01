import { createAction, props } from '@ngrx/store';

// TODO :: handle typing better
export const setAllQuestions = createAction('[Questions] Set All', props<{questions: any}>());
