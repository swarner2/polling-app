import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, tap } from 'rxjs/operators';
import { users } from 'src/data/usersAndQuestions';
import { PollState } from '../models/poll-state.model';
import { getIsQuestionAnsweredByUser, getQuestion, getQuestionOptionStats } from '../store/questions/questions.selectors';
import { getUser } from '../store/user/user.selectors';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss']
})
export class QuestionDetailComponent implements OnInit {
  questionId = this.route.snapshot.paramMap.get('question_id');
  questionId$ = this.route.queryParams.pipe(map(_ => this.route.snapshot.paramMap.get('question_id')))
  question$ = this._store.select(getQuestion, {questionId: this.questionId});
  isQuestionAnswered$ = this._store.select(getIsQuestionAnsweredByUser, {questionId: this.questionId});
  questionOptionStats$ = this._store.select(getQuestionOptionStats, {questionId: this.questionId}).pipe(tap(console.log));
  user$ = this._store.select(getUser);
  users = users;

  constructor(private _store: Store<PollState>, private route: ActivatedRoute) {}

  ngOnInit(): void {
  }
}
