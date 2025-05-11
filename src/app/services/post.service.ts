import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../dto/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  savePost(post: Post): Observable<boolean> {
    return this.http.post<boolean>('https://jsonplaceholder.typicode.com/posts', post);
  }

  updatePost(post: Post): Observable<boolean> {
    return this.http.put<boolean>('https://jsonplaceholder.typicode.com/posts/' + post.id, post);
  }

  deletePost(id: string): Observable<boolean> {
    return this.http.delete<boolean>('https://jsonplaceholder.typicode.com/posts/' + id);
  }

  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/'+id);
  }
}
