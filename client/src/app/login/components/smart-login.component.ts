import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-smart-login',
  template: ` <app-login-form></app-login-form> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmartLoginComponent {}
