import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { PollState } from '../../models/poll-state.model';
import { QuestionModel, QuestionsModel } from '../../models/question.model';
import { addQuestion } from '../../store/questions/questions.actions';
import { getQuestions } from '../../store/questions/questions.selectors';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { getUserId } from 'src/app/store/login/login.selectors';



@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent {
  optionOneText = '';
  optionTwoText = '';

  userId$ = this.store.select(getUserId);
  questions$ = this.store.select(getQuestions);

  constructor(private store: Store<PollState>, private _snackBar: MatSnackBar, private router: Router) {}

  submit(data: {questions: QuestionsModel, userId: string}): void {
    const { questions, userId } = data;
    let questionId = this.generateId();
    while (questionId in questions) {
      questionId = this.generateId();
    }

    const question = new QuestionModel({
      id: questionId,
      author: userId,
      timestamp: new Date().getTime(),
      optionOne: {
        votes: [],
        text: this.optionOneText
      },
      optionTwo: {
        votes: [],
        text: this.optionTwoText
      }
    });

    this.store.dispatch(addQuestion({question}));
    this._snackBar.open('Question Added!', 'Close', {
      duration: 2000,
    });
    this.router.navigate(['/home']);
  }

  generateId(): string {
    return Math.random().toString(16).substr(2, 11) + Math.random().toString(16).substr(2, 11);
  }
}
