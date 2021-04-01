import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PollState } from '../models/poll-store.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  constructor(private store: Store<PollState>) { }

  ngOnInit(): void {
  }

}
