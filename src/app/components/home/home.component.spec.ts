import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { mockDefaultStore } from 'src/app/testing/mock-store-provider';
import { Observable } from 'rxjs';
import { QuestionsModel } from 'src/app/models/question.model';
import { Component, Input } from '@angular/core';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  @Component({
       selector: 'app-questions',
       template: '<div></div>'
   })
   class FakeQuestionsComponent {
      @Input() questions$: Observable<QuestionsModel>;
   }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MatTabsModule, RouterTestingModule, BrowserAnimationsModule],
      declarations: [ HomeComponent, FakeQuestionsComponent ],
      providers: [
        mockDefaultStore,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initially render the Unanswered Questions', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('mat-tab-group').textContent).toContain('Unanswered Questions');
    expect(compiled.querySelector('mat-tab-group').textContent).toContain('Answered Questions');
  });
});
