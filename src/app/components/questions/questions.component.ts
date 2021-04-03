import { KeyValue } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { users } from 'src/data/usersAndQuestions';
import { Questions } from '../../models/poll-state.model';
import { QuestionModel } from '../../models/question.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent {
  @Input() questions$: Observable<Questions>;

  orderByTimestamp = (a: KeyValue<string, any>, b: KeyValue<string, any>): number => {
    return a.value.timestamp < b.value.timestamp ? 1 : -1;
  }

  // TODO :: move into selector
  getQuestionTitle(question: KeyValue<string, QuestionModel>): string {
    const authorName = users[question.value.author].name;
    const date = new Date(question.value.timestamp).toDateString();
    return `${authorName} - ${date}`;
  }

}
