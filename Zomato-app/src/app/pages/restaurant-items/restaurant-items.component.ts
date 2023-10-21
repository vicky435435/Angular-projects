import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-restaurant-items',
  templateUrl: './restaurant-items.component.html',
  styleUrls: ['./restaurant-items.component.css']
})
export class RestaurantItemsComponent {
  
  items: any[]=[];

  categoryId: number = 0
  constructor(private activate: ActivatedRoute, private masterServics:MasterService){
    this.activate.params.subscribe((res: any)=>{
      // this.categoryId = res.categoryName
   
     this.loadFoodItemsByCategory(res.categoryName)
    })
  }

  loadFoodItemsByCategory(name : string){
    this.masterServics.getItemByRestaBYCategoryName(name).subscribe((res: any)=>{
      this.items = res.data;
    })
  }

}
