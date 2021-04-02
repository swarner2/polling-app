import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'questions/:question_id', component: QuestionDetailComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
