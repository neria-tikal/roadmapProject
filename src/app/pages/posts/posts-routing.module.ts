import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostViewComponent } from './post-view/post-view.component';
import { PostsListComponent } from './posts-list/posts-list.component';


const routes: Routes = [
  { 
    path: '',
    component: PostsListComponent,
  },
  {
    path: ':id',
    component: PostViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
