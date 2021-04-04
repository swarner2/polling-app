import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { QuestionPipe } from 'src/app/pipes/question.pipe';
import { mockDefaultStore } from 'src/app/testing/mock-store-provider';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

import { QuestionDetailComponent } from './question-detail.component';

describe('QuestionDetailComponent', () => {
  let component: QuestionDetailComponent;
  let fixture: ComponentFixture<QuestionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatCardModule, MatInputModule, FormsModule, MatRadioModule, MatFormFieldModule, RouterTestingModule],
      declarations: [ QuestionDetailComponent, PageNotFoundComponent, QuestionPipe],
      providers: [
        mockDefaultStore,
        {
        provide: ActivatedRoute,
        useValue: {snapshot: {paramMap: convertToParamMap({question_id: '6ni6ok3ym7mf1p33lnez'})}}
      }
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
