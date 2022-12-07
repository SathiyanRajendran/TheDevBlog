import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/post.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-userview2',
  templateUrl: './post-userview2.component.html',
  styleUrls: ['./post-userview2.component.css']
})
export class PostUserview2Component implements OnInit {

  constructor(private postservice:PostsService,private route:ActivatedRoute) { }
 post:Post|undefined
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params=>{
        const id=params.get('id');
        if(id)
        {
          this.postservice.getPostById(id)
          .subscribe(
            response=>{
   this.post=response;
            }
          )
        }
      }
    )
  }

}
