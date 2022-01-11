import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { PostsRoutingModule } from './posts-routing.module';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostViewComponent } from './post-view/post-view.component';
import { UserDetailsDialogComponent } from 'src/app/components/user-details-dialog/user-details-dialog.component';
import { LoaderModule } from 'src/app/components/loader/loader.module';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    PostsListComponent,
    PostViewComponent,
    UserDetailsDialogComponent,
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    LoaderModule,
    MatCardModule,
    MatDialogModule,
    MatListModule,
    MatTooltipModule,
    MatButtonModule,
  ],
  providers: [],
})
export class PostsModule { }