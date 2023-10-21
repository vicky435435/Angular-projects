import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
  categoryList: any[] = [];

  constructor(private masterServices:MasterService, private router:Router){
  }


  ngOnInit(): void {
    this.loadAllFoodCategories()
  }
  

  loadAllFoodCategories(){
    this.masterServices.getAllFoodCategory().subscribe((res:any)=>{
       this.categoryList = res.data;
       console.log(this.categoryList)
    })
  }


  navigate(item: string){
    this.router.navigate(['/restaurant-items',item])
  }

}
