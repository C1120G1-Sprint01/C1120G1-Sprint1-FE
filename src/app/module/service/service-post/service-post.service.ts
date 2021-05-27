import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Post} from '../../model/post';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicePostService {

  private _API_URL_POSTS = 'http://localhost:8080/posts';

  constructor(private _httpClient: HttpClient) {
  }

  getPostById(id: number): Observable<Post> {
    console.log('get student by id');  // test async
    return this._httpClient.get<Post>(`${this._API_URL_POSTS}/${id}`);
  }

}
