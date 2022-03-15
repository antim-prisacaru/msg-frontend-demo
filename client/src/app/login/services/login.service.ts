import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Credentials from '../../shared/models/credentials.model';
import { Observable } from 'rxjs';
import User from '../../shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private backendUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) {}

  currentUser(): Observable<User> {
    return this.httpClient.get<User>(this.backendUrl + '/logout');
  }

  login(credentials: Credentials): Observable<User> {
    return this.httpClient.post<User>(this.backendUrl + '/login', credentials);
  }

  logout(): void {
    this.httpClient.post(this.backendUrl + '/logout', {});
  }
}
