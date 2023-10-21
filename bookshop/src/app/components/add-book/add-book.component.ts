import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CurdService } from 'src/app/service/curd.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit{
 bookForm:FormGroup;

  constructor(private formBuilder: FormBuilder, private router:Router, private ngZone: NgZone,
    private crudService : CurdService){ 
      this.bookForm = this.formBuilder.group({
        name:[''],
        price:[''],
        description:[]

      })  
    }

    ngOnInit(): void {
      
    }

    onSubmit():any {
      this.crudService.AddBook(this.bookForm.value).subscribe((res:any)=> {
        console.log('Data Added successfull');
        this.ngZone.run(()=> this.router.navigateByUrl('/books-list'))
      },(err) =>{
       console.log(err);
      });
    }

}
