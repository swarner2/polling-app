import { KeyValue } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PollState } from 'src/app/models/poll-state.model';
import { getAllUsers } from 'src/app/store/users/users.selectors';
import { QuestionModel, QuestionsModel } from '../../models/question.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent {
  @Input() questions$: Observable<QuestionsModel>;
  users = null;

  constructor(private _store: Store<PollState>) {
    this._store.select(getAllUsers).subscribe(allUsers => {
      this.users = allUsers;
    }).unsubscribe();
  }

  orderByTimestamp = (a: KeyValue<string, any>, b: KeyValue<string, any>): number => {
    return a.value.timestamp < b.value.timestamp ? 1 : -1;
  }

  getQuestionTitle(question: KeyValue<string, QuestionModel>): string {
    const authorName = this.users[question.value.author].name;
    const date = new Date(question.value.timestamp).toDateString();
    return `${authorName} - ${date}`;
  }

}
