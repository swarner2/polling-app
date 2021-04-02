import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, tap } from 'rxjs/operators';
import { users } from 'src/data/usersAndQuestions';
import { PollState } from '../models/poll-state.model';
import { OptionId } from '../models/question.model';
import { UserModel } from '../models/user.model';
import { answerQuestion } from '../store/questions/questions.actions';
import { getIsQuestionAnsweredByUser, getQuestion, getQuestionOptionStats } from '../store/questions/questions.selectors';
import { getUser } from '../store/user/user.selectors';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss']
})
export class QuestionDetailComponent implements OnInit {
  questionId = this.route.snapshot.paramMap.get('question_id');
  questionId$ = this.route.queryParams.pipe(
    map(_ => this.route.snapshot.paramMap.get('question_id')),
    );
  question$ = this._store.select(getQuestion, {questionId: this.questionId})
    .pipe(
      tap(question => {
        if (question === undefined) {
          this.router.navigate(['page-not-found']);
        }
      }));
  isQuestionAnswered$ = this._store.select(getIsQuestionAnsweredByUser, {questionId: this.questionId});
  questionOptionStats$ = this._store.select(getQuestionOptionStats, {questionId: this.questionId});
  userId: string = null;
  user$ = this._store.select(getUser).pipe(tap(user => {
    this.userId = user?.id;
  }));
  users = users;
  selectedOption = null;

  constructor(private _store: Store<PollState>, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
  }

  submitAnswer(): void {
    this._store.dispatch(answerQuestion({
      questionId: this.questionId,
      selectedOption: this.selectedOption,
      userId: this.userId
    }));
  }
}
