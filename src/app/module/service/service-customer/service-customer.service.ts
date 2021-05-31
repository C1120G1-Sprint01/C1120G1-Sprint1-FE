import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/model/CustomerPost';
import { User } from "../../../model/user/User";

@Injectable({
  providedIn: 'root'
})
export class ServiceCustomerService {
  private API_URL = "http://localhost:8080/";

  private API_URL_LIST = "http://localhost:8080/api/posts";

  constructor(private httpClient: HttpClient) { }

  findAllPostByUsername(page: number): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.API_URL_LIST}/cus-post-list?page=${page}`);
  }

  findPostById(id: number): Observable<Post> {
    return this.httpClient.get<Post>(`${this.API_URL_LIST}/cus-post/${id}`);
  }

  updatePost(id: number, post: Post): Observable<Post> {
    return this.httpClient.post<Post>(`${this.API_URL_LIST}/cus-post-edit/${id}`, post);
  }

  save(user: User): Observable<User> {
    console.log(user);
    return this.httpClient.post<User>(this.API_URL + "user/create", user)

  }
  getListUser(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.API_URL);
  }
}
