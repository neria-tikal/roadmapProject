import { Component, OnInit } from '@angular/core';
import { FetchClient } from 'src/app/fetch-backend';
import { map, take } from "rxjs/operators";
import { JsonPlaceholderService } from 'src/app/services/json-placeholder.service';
import { Post } from 'src/app/interfaces/post';


@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {

  public posts: Post[] = [];

  constructor(private jpService: JsonPlaceholderService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.jpService.getPosts()
      .subscribe((data: Post[]) => {
        console.log('posts', data);
        this.posts = data;
      });
  }


}
