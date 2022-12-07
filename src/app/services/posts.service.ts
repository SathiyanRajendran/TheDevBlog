import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddPostRequest } from '../models/add-post-model';
import { Post } from '../models/post.model';
import { updatedPostRequest } from '../models/update-post-model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient:HttpClient) { }
  apiBaseUrl=environment.apiBaseUrl; 
    getAllPosts():Observable<Post[]>
    {
      return this.httpClient.get<Post[]>(this.apiBaseUrl + '/api/posts');
    }
    getPostById(id:string):Observable<Post>{
        return this.httpClient.get<Post>(this.apiBaseUrl+ '/api/posts/' +id);
    }
    updatePost(id:string|undefined,UpdatedPostRequest:updatedPostRequest):Observable<Post>{
      return this.httpClient.put<Post>(this.apiBaseUrl+'/api/posts/'+id,UpdatedPostRequest);
    }
    addPost(addPostRequest:AddPostRequest){
      return this.httpClient.post<Post>(this.apiBaseUrl+'/api/posts' ,addPostRequest);
    }
    deletePost(id:string|undefined){
      return this.httpClient.delete<Post>(this.apiBaseUrl+'/api/posts/' +id);
    }
  
}
