import { KeyValue } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { users } from 'src/data/usersAndQuestions';
import { PollState } from '../../models/poll-state.model';
import { login } from '../../store/user/user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  users = users;
  userSelection = null;
  orderByName = (a: KeyValue<string, any>, b: KeyValue<string, any>): number => {
    return a.value.name > b.value.name ? 1 : -1;
  }

  constructor(private store: Store<PollState>) {}

    login(): void {
    this.store.dispatch(login({user: this.userSelection}));
  }

  // TODO :: create account creation component
}
