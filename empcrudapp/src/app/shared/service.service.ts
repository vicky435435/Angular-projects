import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService implements OnInit{

  constructor(private http:HttpClient) { }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  //  create data

  addEmployee(data : any):Observable<any>{
  return this.http.post("http://localhost:3000/employees", data)
  }

  // update data

  updateEmplyeeById(id:number , data:any){
    return this.http.put(`http://localhost:3000/employees/${id}`,data);
  }


  // get data

  getAllEmployee():Observable<any>{
    return this.http.get("http://localhost:3000/employees")
  }

  // delete data

  deletEmplyeeById(id:any){
    return this.http.delete(`http://localhost:3000/employees/${id}`);
  }

}