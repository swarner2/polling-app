import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { OptionId, QuestionModel } from 'src/app/models/question.model';
import { UserModel } from 'src/app/models/user.model';
import { getUser } from 'src/app/store/users/users.selectors';
import { PollState } from '../../models/poll-state.model';
import { answerQuestion } from '../../store/questions/questions.actions';
import { getIsQuestionAnsweredByUser, getQuestion, getQuestionAuthor, getQuestionOptionStats } from '../../store/questions/questions.selectors';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss']
})
export class QuestionDetailComponent {
  selectedOption = null;
  questionId = this.route.snapshot.paramMap.get('question_id');

  question$ = this._store.select(getQuestion, {questionId: this.questionId});
  displayPageNotFound$ = this.question$.pipe(map(question => question === undefined));
  isQuestionAnswered$ = this._store.select(getIsQuestionAnsweredByUser, {questionId: this.questionId});
  questionOptionStats$ = this._store.select(getQuestionOptionStats, {questionId: this.questionId});
  questionAuthor$ = this._store.select(getQuestionAuthor, {questionId: this.questionId});
  user$ = this._store.select(getUser);

  constructor(private _store: Store<PollState>, private route: ActivatedRoute, private router: Router) {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  submitAnswer(data: {user: UserModel, question: QuestionModel, selectedOption: OptionId}): void {
    const {user, question, selectedOption} = data;
    this._store.dispatch(answerQuestion({
      questionId: question.id,
      selectedOption,
      userId: user.id
    }));
  }
}
