import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { questions } from 'src/data/usersAndQuestions';

import { QuestionsComponent } from './questions.component';
import { RouterTestingModule } from '@angular/router/testing';
import { mockDefaultStore } from 'src/app/testing/mock-store-provider';



describe('PollsComponent', () => {
  let component: QuestionsComponent;
  let fixture: ComponentFixture<QuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ QuestionsComponent ],
      providers: [
        mockDefaultStore,
      ],

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsComponent);
    component = fixture.componentInstance;
    component.questions$ = new BehaviorSubject(questions);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
