import { KeyValue } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { addUser } from 'src/app/store/users/users.actions';
import { getAllUsers } from 'src/app/store/users/users.selectors';
import { users } from 'src/data/usersAndQuestions';
import { PollState } from '../../models/poll-state.model';
import { login } from '../../store/login/login.actions';
import { CreateAccountDialogComponent } from '../create-account-dialog/create-account-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  users$ = this._store.select(getAllUsers);
  userSelection = null;
  orderByName = (a: KeyValue<string, any>, b: KeyValue<string, any>): number => {
    return a.value.name > b.value.name ? 1 : -1;
  }

  constructor(private _store: Store<PollState>, public dialog: MatDialog) {}

    login(): void {
    this._store.dispatch(login({user: this.userSelection}));
  }

    openDialog(): void {
    const dialogRef = this.dialog.open(CreateAccountDialogComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe((result: {name: string, avatarURL: string}) => {
      if (result) {
        const {name, avatarURL} = result;
        this._store.dispatch(addUser({name, avatarURL}));
      }
    });
  }


}
