import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject } from 'rxjs';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { mockDefaultStore } from './testing/mock-store-provider';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatSelectModule,
        MatFormFieldModule,
        MatButtonModule,
        MatCardModule,
        MatTabsModule,
        MatExpansionModule,
        MatRadioModule,
        FormsModule,
        MatMenuModule,
        MatInputModule,
        MatIconModule,
        MatSnackBarModule,
        MatTableModule,
        MatDialogModule,
        MatAutocompleteModule,
        BrowserAnimationsModule
      ],
      declarations: [
        AppComponent,
        LoginComponent,
        QuestionsComponent,
        UserInfoComponent
      ],
      providers: [
        mockDefaultStore,
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  it('should initially render the login component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-login')).toBeTruthy();
  });

  it('should render the menu and user info when the user is logged in', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.isLoggedIn$ = new BehaviorSubject(true);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-login')).toBe(null);
    const expectedTexts = ['Home', 'Questions', 'Add A Question', 'Leaderboard', 'Logout'];
    expectedTexts.forEach(text => {
      expect(compiled.querySelector('div.menu-container').textContent).toContain(text);
    });
    expect(compiled.querySelector('app-user-info')).toBeTruthy();
  });
});
