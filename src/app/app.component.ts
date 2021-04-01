import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { users, questions } from 'src/data/users';
import { PollState } from './models/poll-store.model';
import { QuestionModel } from './models/question.model';
import { UserModel } from './models/user.model';
import { logout } from './store/user/user.actions';
import { getIsLoggedIn } from './store/user/user.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  userList = Object.keys(users).map(user => new UserModel(users[user]));
  questionList = Object.keys(questions).map(question => new QuestionModel(questions[question]));

  isLoggedIn$ = this._store.select(getIsLoggedIn);

  constructor(private _store: Store<PollState>) {}

  logout(): void {
    this._store.dispatch(logout());
  }

}
