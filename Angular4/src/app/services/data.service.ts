import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Post } from '../posts/posts';
import { AppError } from '../common/app-error';
import { NotFoundExceptiion } from '../common/not-found-exception';
import { BadRequestError } from '../common/bad-inuput-error';
 
@Injectable({
  providedIn: 'root'
})
export class DataService {
  //private url = 'http://jsonplaceholder.typicode.com/posts';
  constructor(private url: string, private http: HttpClient) { }

  getAll() : Observable<Post[]>{
    return this.http.get<Post[]>(this.url).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

   create(resource) : Observable<Post>{
    return this.http.post<Post>(this.url, resource).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  updatePost(post : Post) : Observable<Post>{
    post.title = post.title + ' Updated';
    return  this.http.patch<Post>(this.url+'/'+post.id, post).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  deletePost(id) : Observable<Post>{
     return this.http.delete<Post>(this.url+'/'+id).pipe(
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
