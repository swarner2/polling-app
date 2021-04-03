import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PollState } from 'src/app/models/poll-state.model';
import { getAllUsers } from 'src/app/store/users/users.selectors';


export interface LeaderboardElement {
  name: string;
  avatarURL: string;
  asked: number;
  answered: number;
}

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'asked', 'answered'];
  dataSource$: Observable<LeaderboardElement[]> = this._store.select(getAllUsers).pipe(
      map(users => {
        return Object.values(users).map(user => {
          return {
            name: user.name,
            avatarURL: user.avatarURL,
            asked: user.questions.length,
            answered: Object.values(user.answers).length
          };
        }).sort((x, y) => x.asked + x.answered < y.asked + y.answered ? 1 : -1)
        ;
      })
    );
  constructor(private _store: Store<PollState>) { }

  ngOnInit(): void {
  }

}
