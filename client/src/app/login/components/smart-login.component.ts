import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Store} from "@ngrx/store";
import {State} from "../../state";
import {login} from "../../state/actions/auth.actions";

@Component({
  selector: 'app-smart-login',
  template: ` <app-login-form [form]="form" (login)="loginFunction()" ></app-login-form> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmartLoginComponent {
  form = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  constructor(private store$: Store<State>) {}

  async loginFunction() {
    this.store$.dispatch(login(this.form.value));
  }
}
