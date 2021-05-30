import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../../../model/Post";

@Injectable({
  providedIn: 'root'
})
export class ServicePostService {
  httpOptions: any;
  private API_URL_POST = "http://localhost:8080/api/posts/listPost";
  private API_URL_CATEGORY = "http://localhost:8080/listCategory";
  private API_URL_CHILD_CATEGORY = "http://localhost:8080/listChildCategory";

  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'Access-Control-Allow-Credentials': "true"
    };
  }

  getListPost(page: number): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.API_URL_POST}?page=${page}`);
  }
}

