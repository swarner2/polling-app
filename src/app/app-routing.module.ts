import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { QuestionDetailComponent } from './components/question-detail/question-detail.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'add', component: AddQuestionComponent},
  {path: 'questions/:question_id', component: QuestionDetailComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
