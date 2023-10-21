import { HttpClient, HttpHeaders , HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurdService {
  //node js api
 REST_API : string = "http://localhost:8000/api";

 // set Http Headers.
 httpHeaders = new HttpHeaders().set('Content.Type','application/json')
  constructor(private httpClient:HttpClient) { }


  AddBook(data:Book):Observable<any>{
   let API_URL = `${this.REST_API}/add-book`;
   return this.httpClient.post(API_URL,data).pipe(catchError(this.handleError))
  }

  // get  ALL BOOKS Details 

  getBooks(){
    return this.httpClient.get(`${this.REST_API}`);
  }

  // get Single Book
  getBook(id:any) : Observable<any>{
    let API_URL = `${this.REST_API}/read-book/${id}`;
    return this.httpClient.get(API_URL,{headers:this.httpHeaders}).pipe(map((res:any)=>{
      return res || {}
    }),
    catchError(this.handleError)
    )
  }

  // update book Data

  UpdateBook(id:any, data:any):Observable<any>{
    let API_URL = `${this.REST_API}/update-Book/${id}`;
    return this.httpClient.put(API_URL, data, {headers:this.httpHeaders}).pipe(
      catchError(this.handleError)
    )
  }

  // Delete Book date

  deleteBook(id:any): Observable<any>{
   let API_URL = `${this.REST_API}/delete-book/${id}`;
   return this.httpClient.delete(API_URL, {headers: this.httpHeaders}).pipe(
    catchError(this.handleError)
   )
  }

  // Error
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage)
  }

}


