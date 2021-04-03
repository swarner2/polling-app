import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { LoginActions } from '../store/login/login.actions';
import { Router } from '@angular/router';


@Injectable()
export class LogoutEffects {
  logout$ = createEffect(() => this.actions$.pipe(
    ofType(LoginActions.logout),
    tap(() => {
      this.router.navigate(['/', 'home']);
    })
    ),
    {dispatch: false}
  );

  constructor(
    private actions$: Actions,
    private router: Router,
  ) {}
}

