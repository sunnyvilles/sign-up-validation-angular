import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

import { IUser } from '../models/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  })
};

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private baseUrl: string = 'https://demo-api.now.sh/users/';

  constructor(private http: HttpClient) { }

  postUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(this.baseUrl, user, httpOptions).pipe(
      catchError(this.onError));;
  }

  onError(err: any): Observable<any> {
    const message = 'error while getting the data: ' + err.status;
    return throwError(() => message);
  }
}
