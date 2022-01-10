import { Injectable } from '@angular/core';
import { FetchClient } from '../fetch-backend';
import { map, take } from "rxjs/operators";
import { Post } from '../interfaces/post';
import { User } from '../interfaces/user';
import { Comment } from '../interfaces/comment';


@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {

  private baseUrl = "https://jsonplaceholder.typicode.com/";

  constructor(private httpFetch: FetchClient) {}

  getPosts() {
    return this.httpFetch.get<Post[]>(this.baseUrl + 'posts');
  }

  getPost(itemId: number) {
    return this.httpFetch.get<Post>(this.baseUrl + 'posts/' + itemId);
  }

  getUser(userId: number) {
    return this.httpFetch.get<User>(this.baseUrl + 'users/' + userId);
  }

  getComments(itemId: number) {
    return this.httpFetch.get<Comment[]>(this.baseUrl + 'posts/' + itemId + '/comments');
  }
}
