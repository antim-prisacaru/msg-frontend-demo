import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { SmartLoginComponent } from './login/components/smart-login.component';
import { LoginFormComponent } from './login/components/login-form.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './shared/services/auth.service';
import { reducers, metaReducers } from './state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './state/effects/auth.effects';

@NgModule({
  declarations: [AppComponent, LoginPageComponent, SmartLoginComponent, LoginFormComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([AuthEffects]),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
