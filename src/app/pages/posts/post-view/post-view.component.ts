import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { UserDetailsDialogComponent } from 'src/app/components/user-details-dialog/user-details-dialog.component';
import { JsonPlaceholderService } from 'src/app/services/json-placeholder.service';
import {MatDialog} from '@angular/material/dialog';
import { Comment, Post, User } from '../posts.interfaces';


@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {

  public busy = false;
  public postId = this.route.snapshot.params.id;
  public post!: Post;
  public user!: User;
  public comments!: Comment[];
  
  constructor(
    private route: ActivatedRoute,
    private jpService: JsonPlaceholderService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    console.log('this.route.snapshot.params.id', this.route.snapshot.params.id);
    this.loadData();
    this.loadComments();
  }
  
  loadData() {
    this.busy = true;
    this.jpService.getPost(this.postId)
      .subscribe((post: Post) => {
        console.log('post', post);
        this.post = post;
        this.loadUser();
      })
  }
  
  loadUser() {
    this.jpService.getUser(this.post.userId)
      .subscribe((user: User) => {
        console.log('user', user);
        this.user = user;
        this.busy = false;
      })
  }

  loadComments() {
    this.jpService.getComments(this.postId)
      .subscribe((comments: Comment[]) => {
        console.log('comments', comments);
        this.comments = comments;
      })
  }

  openUserDetails() {
    console.log('openUserDetails');
    this.dialog.open(UserDetailsDialogComponent, {
      data: {
        user: this.user,
      },
    });
  }

}
