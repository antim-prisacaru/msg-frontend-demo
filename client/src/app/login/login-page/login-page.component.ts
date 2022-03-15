import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-login-page',
  template: ` <app-smart-login></app-smart-login> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {}
