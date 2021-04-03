import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { questions, users } from 'src/data/usersAndQuestions';
import { PollState } from './models/poll-state.model';
import { setAllQuestions } from './store/questions/questions.actions';
import { getQuestions } from './store/questions/questions.selectors';
import { logout } from './store/login/login.actions';
import { getIsLoggedIn } from './store/login/login.selectors';
import { setAllUsers } from './store/users/users.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  questions$ = this._store.select(getQuestions);
  isLoggedIn$ = this._store.select(getIsLoggedIn);

  constructor(private _store: Store<PollState>) {
    this._store.dispatch(setAllQuestions({questions}));
    this._store.dispatch(setAllUsers({users}));
  }

  logout(): void {
    this._store.dispatch(logout());
  }

}
