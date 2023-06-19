import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private baseUrl = 'https://demo-api.vercel.app/users';

  constructor(private http: HttpClient) { }

  postUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(this.baseUrl, user).pipe(
      catchError(this.onError));
  }

  onError(err: any): Observable<never> {
    const message = 'error while getting the data: ' + err.status;
    return throwError(() => message);
  }
}
