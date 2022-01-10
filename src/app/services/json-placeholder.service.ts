import { Injectable } from '@angular/core';
import { FetchClient } from '../fetch-backend';
import { map, take } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {

  private baseUrl = "https://jsonplaceholder.typicode.com/";

  constructor(private httpFetch: FetchClient) {}

  getPosts = () => {
    return this.httpFetch.get<any>(this.baseUrl + 'posts');
  }
}
