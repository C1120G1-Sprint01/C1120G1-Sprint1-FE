import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Post} from 'src/app/model/CustomerPost';

@Injectable({
  providedIn: 'root'
})
export class ServiceCustomerService {

  private API_URL_LIST = "http://localhost:8080/api/posts";

  constructor(private httpClient: HttpClient) {
  }

  findAllPostByUsername(page: number): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.API_URL_LIST}/cus-post-list?page=${page}`);
  }

  findPostById(id: number): Observable<Post> {
    return this.httpClient.get<Post>(`${this.API_URL_LIST}/cus-post/${id}`);
  }

  updatePost(id: number, post: Post): Observable<Post> {
    return this.httpClient.post<Post>(`${this.API_URL_LIST}/cus-post-edit/${id}`, post);
  }


  savePost(post: Post): Observable<Post> {
    return this.httpClient.post<Post>(`${this.API_URL_LIST}/createPost`, post);
  }

}
