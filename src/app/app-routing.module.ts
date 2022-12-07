import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddComponent } from './admin/admin-add/admin-add.component';
import { AdminPostComponent } from './admin/admin-post/admin-post.component';
import { AdminViewPostComponent } from './admin/admin-view-post/admin-view-post.component';
import { PostUserviewComponent } from './post-userview/post-userview.component';
import { PostUserview2Component } from './post-userview2/post-userview2.component';

const routes: Routes = [
  {
    path:'',
    component:PostUserviewComponent
  },
  {
    path:'blogpost/:id',
    component:PostUserview2Component
  },
  {
    path:'admin/posts',
    component:AdminPostComponent

  },
  {
    path:'admin/posts/add',
    component:AdminAddComponent
  },
  {
    path:'admin/posts/:id',
    component:AdminViewPostComponent
  }
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
