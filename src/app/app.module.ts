import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPostComponent } from './admin/admin-post/admin-post.component';
import {HttpClientModule} from '@angular/common/http';
import { AdminViewPostComponent } from './admin/admin-view-post/admin-view-post.component';
import { FormsModule } from '@angular/forms';
import { AdminAddComponent } from './admin/admin-add/admin-add.component';
import { PostUserviewComponent } from './post-userview/post-userview.component';
import { PostUserview2Component } from './post-userview2/post-userview2.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminPostComponent,
    AdminViewPostComponent,
    AdminAddComponent,
    PostUserviewComponent,
    PostUserview2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
