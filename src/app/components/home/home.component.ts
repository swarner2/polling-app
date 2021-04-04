import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { PollState } from '../../models/poll-state.model';
import { getAnsweredQuestions, getQuestions, getUnansweredQuestions } from '../../store/questions/questions.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  questions$ = this._store.select(getQuestions);
  unansweredQuestions$ = this._store.select(getUnansweredQuestions);
  answeredQuestions$ = this._store.select(getAnsweredQuestions);

  constructor(private _store: Store<PollState>) { }

}
