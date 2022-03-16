import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import User from '../shared/models/user.model';
import { Store } from '@ngrx/store';
import { State } from '../state';
import { selectUser } from '../state/selectors/auth.selectors';
import {logoutUser} from "../state/actions/auth.actions";

@Component({
  selector: 'app-home',
  template: `<nav class="flex items-center justify-between flex-wrap bg-teal p-6">
    <div class="flex items-center flex-no-shrink text-white mr-6">
      <svg class="h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
        />
      </svg>
      <span class="font-semibold text-xl tracking-tight text-black">Welcome, {{ user?.firstName }}</span>
    </div>
    <div class="float-right">
      <button class="bg-indigo-600 hover:bg-indigo-400 text-white font-bold py-2 px-4 rounded" (click)="logout()">
        Logout
      </button>
    </div>
  </nav>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  user: User | undefined;

  constructor(private store$: Store<State>) {}

  ngOnInit(): void {
    this.store$.select(selectUser).subscribe(user => (this.user = user));
  }

  logout(): void {
    this.store$.dispatch(logoutUser());
  }
}
