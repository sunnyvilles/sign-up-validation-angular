import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { IUser } from '../models/user';

const userObj: IUser = {
  firstName: 'One',
  lastName: 'two',
  email: 'one.two@three.com',
}

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpClient]
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an error message when onError method is called', (done: DoneFn) => {
    const errorMessage = 'error while getting the data: 500';

    service.onError({ status: 500 }).subscribe({
      error: (error: string) => {
        expect(error).toEqual(errorMessage);
        done();
      }
    });
  });


  it('it should send a POST request to server to create a new user', () => {

    service.postUser(userObj).subscribe((response: IUser) => {
      expect(response).toEqual(userObj);
    });

    const req = httpMock.expectOne('https://demo-api.now.sh/users/');
    expect(req.request.method).toBe('POST');
    req.flush(userObj);
  });
});
