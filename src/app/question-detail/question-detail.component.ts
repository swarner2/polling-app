import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { users } from 'src/data/usersAndQuestions';
import { PollState } from '../models/poll-state.model';
import { getIsQuestionAnsweredByUser, getOptionOfQuestionChosenByUser, getQuestion } from '../store/questions/questions.selectors';
import { getUser } from '../store/user/user.selectors';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss']
})
export class QuestionDetailComponent implements OnInit {
  questionId = '8xf0y6ziyjabvozdd253nd';
  question$ = this._store.select(getQuestion, {questionId: this.questionId});
  isQuestionAnswered$ = this._store.select(getIsQuestionAnsweredByUser, {questionId: this.questionId});
  optionOfQuestionChosenByUser$ = this._store.select(getOptionOfQuestionChosenByUser, {questionId: this.questionId});
  user$ = this._store.select(getUser);
  users = users;

  constructor(private _store: Store<PollState>) { }

  ngOnInit(): void {
  }



}
