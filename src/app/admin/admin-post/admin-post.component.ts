import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-admin-post',
  templateUrl: './admin-post.component.html',
  styleUrls: ['./admin-post.component.css']
})
export class AdminPostComponent implements OnInit {

  constructor(private postService:PostsService) { }

  posts:Post[]=[];
  ngOnInit(): void {
    this.postService.getAllPosts().subscribe
    (response=>{
        this.posts=response;
    })
  }

}
