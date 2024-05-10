import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { IPerson } from './person';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:3000/persons';
  typicodeUrl = 'https://jsonplaceholder.typicode.com/users';

   formurl = "http://localhost:3006/users";

    postdata(user:any){
     return this.http.post(this.formurl , user);
    }

  getUsers(): Observable<IPerson>{
    return this.http.get<IPerson>(this.typicodeUrl).pipe(catchError(this.handleError));
  }

  getUser(id:any){
    return this.http.get(this.typicodeUrl + `/${id}`)
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
