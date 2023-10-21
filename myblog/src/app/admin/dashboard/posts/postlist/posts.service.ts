import { Injectable } from '@angular/core';
import { post } from './post.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts:post[] =[];
  private postUpdate = new Subject<post[]>();

  constructor() { }

  getUpdateListner(){
    return this.postUpdate.asObservable();
  }

  addPost(title:string, content:string, dataTime:any){
    const post:post={title:title,content:content, dataTime:new Date()};
    this.posts.push(post);
    this.postUpdate.next([...this.posts]);
  }

  getAll(){
    return this.posts;
  }
}
