import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Followers } from '../followers/followers';
import { catchError, retry } from 'rxjs/operators';
import { NotFoundExceptiion } from '../common/not-found-exception';
import { BadRequestError } from '../common/bad-inuput-error';
import { AppError } from '../common/app-error';

@Injectable({
  providedIn: 'root'
})
export class FollowersService {

  private url : string  = "https://api.github.com/users/mosh-hamedani/followers";
  constructor(private http : HttpClient) { }

  getFollowers() : Observable<Followers[]> {
      return this.http.get<Followers[]>(this.url).pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  handleError(error : HttpErrorResponse) {
    if(error.status === 404){
      return throwError( new NotFoundExceptiion());
    } else if(error.status === 400){
      return throwError( new BadRequestError(error.message));
    }
    return throwError( new AppError(error));
 }
}
