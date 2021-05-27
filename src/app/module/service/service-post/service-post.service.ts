import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../../../model/post";

@Injectable({
  providedIn: 'root'
})
export class ServicePostService {

  public API_URL = "http://localhost:8080/admin/post";

  constructor(private _httpClient: HttpClient) {
  }

  findAll(): Observable<Post[]> {
    return this._httpClient.get<Post[]>(this.API_URL);
  }

  findById(id: number): Observable<Post> {
    return this._httpClient.get<Post>(`${this.API_URL}/${id}`);
  }
  deleteByIdPost(id: number): Observable<Post> {
    // @ts-ignore
    return this._httpClient.delete<Post>(`${this.API_URL}/${id}`);
  }
}
