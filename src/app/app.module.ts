import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/user/user.reducers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { MatTabsModule } from '@angular/material/tabs';
import { QuestionsComponent } from './components/questions/questions.component';
import { questionsReducer } from './store/questions/questions.reducers';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { QuestionDetailComponent } from './components/question-detail/question-detail.component';
import { EffectsModule } from '@ngrx/effects';
import { LogoutEffects } from './effects/logout.effects';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MatMenuModule } from '@angular/material/menu';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { MatTableModule } from '@angular/material/table';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserInfoComponent,
    QuestionsComponent,
    QuestionDetailComponent,
    PageNotFoundComponent,
    AddQuestionComponent,
    LeaderboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(
      {
        user: userReducer,
        questions: questionsReducer
      }, {}),
    BrowserAnimationsModule,
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    EffectsModule.forRoot([LogoutEffects]),
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
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
