import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  url='http://localhost:5000/users';


  constructor( private http: HttpClient) { }
  postUsers(regForm){
    return this.http.post<any>(this.url, regForm).
    pipe(catchError(this.errorHandler));
  }

  errorHandler(err : HttpErrorResponse){
    return throwError(err);
  }
}
