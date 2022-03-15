import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { SmartLoginComponent } from './login/components/smart-login.component';
import { LoginFormComponent } from './login/components/login-form.component';
import { HomeComponent } from './home/home.component';
import { LoginService } from './login/services/login.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, LoginPageComponent, SmartLoginComponent, LoginFormComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, StoreModule.forRoot({}, {})],
  providers: [LoginService],
  bootstrap: [AppComponent],
})
export class AppModule {}
