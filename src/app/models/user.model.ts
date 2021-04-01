export class UserModel {
  id: string;
  name: string;
  avatarURL: string;
  answers: {key: string };
  questions: string[];

  constructor(user: UserModel) {
      Object.assign(this, user);
  }
}
