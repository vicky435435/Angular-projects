import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { datamodel } from 'src/datamodel';
import { ApisService } from './apis.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  data: undefined|datamodel[];
 
  constructor(private api:ApisService){

  }
  ngOnInit(): void {
    this.getData()
  }
  

submit(data:datamodel) {
//  console.log(data)
this.api.post(data).subscribe(result=>{
  this.getData()
})

}
  title = 'api-app';

  //get method

  // get(){
  //   return this.http.get("")
  // }

  getData(){
    this.api.get().subscribe(res=>{
      this.data = res;
    })
  }
}
