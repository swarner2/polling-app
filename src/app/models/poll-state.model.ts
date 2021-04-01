import { QuestionModel } from './question.model';
import { UserModel } from './user.model';

export type Questions = {[key: string]: QuestionModel };

export class PollState {
    user: UserModel;
    questions: Questions;
}
