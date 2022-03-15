import { Component, ChangeDetectionStrategy } from '@angular/core';
import User from '../shared/models/user.model';

@Component({
  selector: 'app-home',
  template: ` Welcome {{ user.firstName }} `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  user: User;
}
