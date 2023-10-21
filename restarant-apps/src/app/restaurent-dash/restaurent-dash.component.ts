import { Component ,OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RestaurantData } from './restaurent.model';
import { ApiService } from '../shared/api.service';
@Component({
  selector: 'app-restaurent-dash',
  templateUrl: './restaurent-dash.component.html',
  styleUrls: ['./restaurent-dash.component.css']
})
export class RestaurentDashComponent implements OnInit{

  formValue!:FormGroup
  restaurentModelObj : RestaurantData = new RestaurantData;
  allRestarantData: any;
  showAdd!: boolean
  showbtn! : boolean;
  constructor(private formBuilder:FormBuilder, private api: ApiService){

  }
 
  ngOnInit(): void{
    this.formValue = this.formBuilder.group({
      name:[''],
      email:[''],
      gender: [''],
      mobile:[''],
      address:[''],
      services:['']
    })

    this.getAllResto()
  }

  clickAddResto(){
    this.formValue.reset();
    this.showAdd=true;
    this.showbtn=false;
  }


  // Now Subscribing our data which is maped via Service 

  addResto(){
   this.restaurentModelObj.name = this.formValue.value.name;
   this.restaurentModelObj.email = this.formValue.value.email;
   this.restaurentModelObj.gender = this.formValue.value.gender;
   this.restaurentModelObj.mobile = this.formValue.value.mobile;
   this.restaurentModelObj.address = this.formValue.value.address;
   this.restaurentModelObj.services = this.formValue.value.services;

   this.api.postRestaurant(this.restaurentModelObj).subscribe(res=>{
    console.log(res);
    alert("restaurnat add succesfully");

    let ref = document.getElementById('clear');
    ref?.click();

    this.formValue.reset()
    this.getAllResto()
   },
   err=>{
    alert("something is wrong ")
   }
   )
  }

  // Get all Data 

  getAllResto(){
    this.api.getRestaurant().subscribe(res=>{
      this.allRestarantData = res
  })
}

 deleteResto(data:any){
  this.api.deleteRestaurant(data.id).subscribe(res=>{
   alert("Restaurant Records Deleted")
   this.getAllResto()
 })
}

onEditResto(data:any){
  this.showAdd=false;
  this.showbtn=true;
  this.restaurentModelObj.id = data.id
  this.formValue.controls['name'].setValue(data.name);
  this.formValue.controls['email'].setValue(data.email);
  this.formValue.controls['gender'].setValue(data.gender);
  this.formValue.controls['mobile'].setValue(data.mobile);
  this.formValue.controls['address'].setValue(data.address);
  this.formValue.controls['services'].setValue(data.services);
}

upDateResto(){
  this.restaurentModelObj.name = this.formValue.value.name;
   this.restaurentModelObj.email = this.formValue.value.email;
   this.restaurentModelObj.gender= this.formValue.value.gender;
   this.restaurentModelObj.mobile = this.formValue.value.mobile;
   this.restaurentModelObj.address = this.formValue.value.address;
   this.restaurentModelObj.services = this.formValue.value.services;

   this.api.updateRestaurant(this.restaurentModelObj,this.restaurentModelObj.id).subscribe(res => {
    alert("restuarant rocard updated")
   })

   let ref = document.getElementById('clear');
   ref?.click();

   this.formValue.reset()
   this.getAllResto()
}

}
