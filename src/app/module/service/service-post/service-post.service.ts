import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Post} from '../../../model/Post';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicePostService {

  private _API_URL_POSTS = 'http://localhost:8080/api/posts';

  constructor(private _httpClient: HttpClient) {
  }

  getPostById(id: number): Observable<Post> {
    return this._httpClient.get<Post>(`${this._API_URL_POSTS}/${id}`);
  }

}
