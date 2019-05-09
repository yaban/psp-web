import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError, tap, switchMap } from 'rxjs/operators';
import { Credentials, Token } from '../models';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credentials: Credentials): Observable<Token> {
    console.log(environment.apiUrl);
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<Token>(environment.apiUrl + 'merchant/user/login', credentials, { headers } );
  }

  logout() {
    return of(true);
  }
}
