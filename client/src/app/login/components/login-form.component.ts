import {Component, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login-form',
  template: `
    <main class="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white" [formGroup]="form">
      <section class="flex w-[30rem] flex-col space-y-10">
        <div class="text-center text-4xl font-medium">Log In</div>

        <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
          <input
            formControlName="username"
            type="text"
            placeholder="Username"
            class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
          />
        </div>

        <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
          <input
            formControlName="password"
            type="password"
            placeholder="Password"
            class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
          />
        </div>

        <button class="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400" (click)="login.emit()">LOG IN</button>
      </section>
    </main>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  @Input() form: FormGroup;
  @Output() login = new EventEmitter();
}
