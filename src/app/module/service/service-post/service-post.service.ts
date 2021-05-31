import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../../../model/Post';

@Injectable({
  providedIn: 'root'
})
export class ServicePostService {
  private url = "http://localhost:8080/api/posts";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    'Access-Control-Allow-Origin': 'http://localhost:4200',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
  };

  private header: any;

  constructor(private http: HttpClient) {
    this.header = new Headers({'Content-Type': 'application/context'})
  }

  getAdminPage(): Observable<any> {
    return this.http.get(this.url, this.httpOptions);
  }

  getAllPostListDetail(): Observable<any> {
    return this.http.get<any>(this.url + "/listDetail", this.httpOptions);
  }

  getAllPostListApprove(): Observable<any> {
    return this.http.get<any>(this.url + "/listApprove", this.httpOptions);
  }

  getPostDetailByIndex(postId: number): Observable<any> {
    return this.http.get<any>(this.url + "/listDetail/" + postId, this.httpOptions);
  }

  getPostApproveByIndex(postId: number): Observable<any> {
    return this.http.get<any>(this.url + "/listApprove/" + postId, this.httpOptions);
  }

  getPostWaitByIndex(postId: number): Observable<any> {
    return this.http.get<any>(this.url + "/listWait/" + postId, this.httpOptions);
  }

  approvePost(postId: number): Observable<any> {
    return this.http.put(this.url + "/listApprove/approve/" + postId, this.httpOptions);
  }

  deletePost(postId: number): Observable<any> {
    return this.http.delete<any>(this.url + "/listApprove/delete/" + postId, this.httpOptions);
  }

  waitPost(postId: number): Observable<any> {
    return this.http.put(this.url + "/listApprove/wait/" + postId, this.httpOptions);
  }

  getAllPostListWait(): Observable<any> {
    return this.http.get<any>(this.url + "/listWait", this.httpOptions);
  }

  approveWait(postId: number): Observable<any> {
    return this.http.put(this.url + "/listWait/approve/" + postId, this.httpOptions);
  }

  deleteWait(postId: number): Observable<any> {
    return this.http.delete<any>(this.url + "/listWait/delete/" + postId, this.httpOptions);
  }
}
