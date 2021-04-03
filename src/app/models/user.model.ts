import { OptionId } from "./question.model";

export interface UsersModel {
  [key: string]: UserModel;
}

export class UserModel {
  id: string;
  name: string;
  avatarURL: string;
  answers: {[key: string]: OptionId };
  questions: string[];

  constructor(user: UserModel) {
      Object.assign(this, user);
  }
}
