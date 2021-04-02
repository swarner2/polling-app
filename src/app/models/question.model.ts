import { UserModel } from "./user.model";

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

export class OptionStatsModel {
  numberOfVotes: number;
  percentageOfVotes: number;
  isUsersAnswer: boolean;
  text: string;
  votes: string[];

  constructor(numberOfVotes: number, totalNumberOfVotes: number, isUsersAnswer: boolean, option: OptionModel) {
    this.numberOfVotes = numberOfVotes;
    const percentage = numberOfVotes / totalNumberOfVotes;
    this.percentageOfVotes = Number.isNaN(percentage) || !Number.isFinite(percentage) ? 0 : percentage;
    this.isUsersAnswer = isUsersAnswer;
    this.text = option.text;
    this.votes = option.votes;
  }
}

export class QuestionOptionStatsModel {
  optionOne: OptionStatsModel;
  optionTwo: OptionStatsModel;

  constructor(question: QuestionModel, user: UserModel) {
    const optionOneNumberOfVotes = question.optionOne.votes.length;
    const optionTwoNumberOfVotes = question.optionTwo.votes.length;
    const totalNumberOfVotes = optionOneNumberOfVotes + optionTwoNumberOfVotes;
    const answeredOptionOne = user.answers[question.id] === 'optionOne';
    const answeredOptionTwo = user.answers[question.id] === 'optionTwo';
    return {
      optionOne: new OptionStatsModel(optionOneNumberOfVotes, totalNumberOfVotes, answeredOptionOne, question.optionOne),
      optionTwo: new OptionStatsModel(optionTwoNumberOfVotes, totalNumberOfVotes, answeredOptionTwo, question.optionTwo)
    };
  }
}


export class OptionModel {
  votes: string[]; // list of userIds
  text: string;
}
