import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getUser } from 'src/app/store/users/users.selectors';
import { PollState } from '../../models/poll-state.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {

  user$ = this._store.select(getUser);
  constructor(private _store: Store<PollState>) { }

}
