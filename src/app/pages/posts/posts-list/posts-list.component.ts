import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService } from 'src/app/services/json-placeholder.service';
import { Post } from '../posts.interfaces';


@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  public busy = false;
  public posts: Post[] = [];

  constructor(private jpService: JsonPlaceholderService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.busy = true;
    this.jpService.getPosts()
      .subscribe((data: Post[]) => {
        console.log('posts', data);
        this.posts = data;
        this.busy = false;
      });
  }


}
