import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PollState } from '../models/poll-state.model';
import { getUser } from '../store/user/user.selectors';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {

  user$ = this._store.select(getUser);
  constructor(private _store: Store<PollState>) { }


}
