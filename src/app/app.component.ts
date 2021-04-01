import { Component } from '@angular/core';
import { users, questions } from 'src/data/users';
import { QuestionModel } from './models/question.model';
import { UserModel } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'poll-app';

  userList = Object.keys(users).map(user => new UserModel(users[user]));
  questionList = Object.keys(questions).map(question => new QuestionModel(questions[question]));


  constructor() {
  }

}
