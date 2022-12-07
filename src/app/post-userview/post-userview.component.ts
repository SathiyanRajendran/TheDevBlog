import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-userview',
  templateUrl: './post-userview.component.html',
  styleUrls: ['./post-userview.component.css']
})
export class PostUserviewComponent implements OnInit {

  constructor(private postservice:PostsService) { }
posts:Post[]=[];
//post:Post|undefined;
  ngOnInit(): void {
    this.postservice.getAllPosts()
    .subscribe(
      response=>{
this.posts=response;
//this.post=this.posts[0];
      }
    )
  }

}
