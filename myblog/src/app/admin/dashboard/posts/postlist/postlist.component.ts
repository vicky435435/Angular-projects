import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { post } from './post.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit, OnDestroy {
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.
  


 constructor(public ps:PostsService){

 }
  

  ngOnInit(): void {
    this.posts = this.ps.getAll()
    this.postSub = this.ps.getUpdateListner().subscribe((posts:post[])=>{
      this.posts = posts;
    })
  }

  posts:post[] = []
  private postSub: Subscription;


  ngOnDestroy() {
   this.postSub.unsubscribe();
  }


  // posts = [
  //   {title:'angular blog app', content: 'This is Angular Project'},
  //   { title: "Nodejs Blog App",content:"This Is NodeJs project"},
  //   { title: "ReactJS Blog App",content:"This Is React Js project"},
  //   { title: "Mean satck Blog App",content:"This Is React Js project"},

  // ]



}
