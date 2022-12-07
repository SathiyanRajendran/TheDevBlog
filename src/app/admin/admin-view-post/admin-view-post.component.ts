import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { updatedPostRequest } from 'src/app/models/update-post-model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-admin-view-post',
  templateUrl: './admin-view-post.component.html',
  styleUrls: ['./admin-view-post.component.css']
})
export class AdminViewPostComponent implements OnInit {

  constructor(private route: ActivatedRoute, private postService: PostsService) { }

  post:Post | undefined;
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        const id = params.get('id');
        if (id) {
          this.postService.getPostById(id)
            .subscribe(
              response => {
             this.post=response;
              }
            );
        }
      }
    );
  }
  onSubmit():void
  {
    const updatedPostRequest:updatedPostRequest={
      author:this.post?.author,
      content:this.post?.content,
      featuredImagesUrl:this.post?.featuredImagesUrl,
      publishedDate:this.post?.publishedDate,
      updatedDate:this.post?.updatedDate,
      summary:this.post?.summary,
      urlHandle:this.post?.urlHandle,
      visible:this.post?.visible,
      title:this.post?.title

    }
    this.postService.updatePost(this.post?.id,updatedPostRequest)
    .subscribe(
      response=>{
      alert("Success")
    })
   
  }
  deletePost():void{
    this.postService.deletePost(this.post?.id)
    .subscribe(
      response=>{
        alert("Deleted Successfully");
      }
    )
  }

}
