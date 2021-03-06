import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { JsonPlaceholderService } from 'src/app/services/json-placeholder.service';
import {MatDialog} from '@angular/material/dialog';
import { Comment, Post, User } from '../../posts/posts.interfaces';


@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.scss']
})
export class ItemViewComponent implements OnInit {

  public busy = true;
  public itemId = this.route.snapshot.params.id;
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
    this.jpService.getPost(this.itemId)
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
    this.jpService.getComments(this.itemId)
      .subscribe((comments: Comment[]) => {
        console.log('comments', comments);
        this.comments = comments;
      })
  }

  openUserDetails() {
    console.log('openUserDetails');
    // this.dialog.open(UserDetailsDialogComponent, {
    //   data: {
    //     user: this.user,
    //   },
    // });
  }

}
