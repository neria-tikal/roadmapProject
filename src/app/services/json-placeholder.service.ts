import { Injectable } from '@angular/core';
import { FetchClient } from '../fetch-backend';
import { Comment, Post, User } from '../pages/posts/posts.interfaces';


@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {

  private baseUrl = "https://jsonplaceholder.typicode.com/";

  constructor(private httpFetch: FetchClient) {}

  getPosts() {
    return this.httpFetch.get<Post[]>(this.baseUrl + 'posts');
  }

  getPost(postId: number) {
    return this.httpFetch.get<Post>(this.baseUrl + 'posts/' + postId);
  }

  getUser(userId: number) {
    return this.httpFetch.get<User>(this.baseUrl + 'users/' + userId);
  }

  getComments(postId: number) {
    return this.httpFetch.get<Comment[]>(this.baseUrl + 'posts/' + postId + '/comments');
  }
}
