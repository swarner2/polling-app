import { QuestionModel, QuestionsModel } from './question.model';
import { UsersModel } from './user.model';



export class PollState {
    userId: string;
    users: UsersModel;
    questions: QuestionsModel;
}
