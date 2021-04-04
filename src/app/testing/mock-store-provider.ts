import { questions, users } from 'src/data/usersAndQuestions';
import { provideMockStore } from '@ngrx/store/testing';

export const mockDefaultStore = provideMockStore({
        initialState: {
        users,
        user: 'johnDoe',
        questions
        },
    });
