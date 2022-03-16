import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Credentials from '../../shared/models/credentials.model';
import {firstValueFrom, map, Observable} from 'rxjs';
import User from '../../shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private backendUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) {}

  async currentUser(): Promise<User | undefined> {
    return await firstValueFrom(this.httpClient.get<User>(this.backendUrl + '/me')).catch(() => undefined);
  }

  async login(credentials: Credentials): Promise<User | undefined> {
    return await firstValueFrom(this.httpClient.post<User>(this.backendUrl + '/login', credentials)).catch(() => undefined);
  }

  async logout(): Promise<void> {
    await firstValueFrom(this.httpClient.post(this.backendUrl + '/logout', {}));
  }
}
