
export class QuestionModel {
  id: string;
  author: string;
  timestamp: number;
  optionOne: OptionModel;
  optionTwo: OptionModel;

  constructor(question: QuestionModel) {
      Object.assign(this, question);
  }
}


export class OptionModel {
  votes: string[]; // list of userIds
  text: string;
}
