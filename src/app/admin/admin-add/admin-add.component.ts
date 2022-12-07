import { Component, OnInit } from '@angular/core';
import { AddPostRequest } from 'src/app/models/add-post-model';
import { Post } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent implements OnInit {

  constructor(private postService:PostsService) { }
  post:AddPostRequest={
    author:'',
    content:'',
    featuredImagesUrl:'',
    summary:'',
    title:'',
    publishedDate:'',
    updatedDate:'',
    visible:true,
    urlHandle:'',
  }
  ngOnInit(): void {
  }
  onSubmit():void{
     this.postService.addPost(this.post)
     .subscribe(
      response=>{
        alert('Success');
      }
     )
  }

}
