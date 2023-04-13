import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { datamodel } from 'src/datamodel';
@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(private http:HttpClient) { }

  // post method
  post(data:datamodel){
    return this.http.post<datamodel>("http://localhost:3000/posts",data)
  }

  // get data method
  get(){
    return this.http.get<datamodel[]>("http://localhost:3000/posts")
  }
}
