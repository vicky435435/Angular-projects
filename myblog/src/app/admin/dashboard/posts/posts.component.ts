import { Component, OnInit } from '@angular/core';
import { PostsService } from './postlist/posts.service';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{


constructor(private ps:PostsService){

}

ngOnInit(): void {
  throw new Error('Method not implemented.');
}


onPostData(form:NgForm) {
  if(!form.invalid){
  this.ps.addPost(form.value.title, form.value.content, form.value.dataTime);
   form.resetForm()
  }
  else {
    return
  }
}


}
