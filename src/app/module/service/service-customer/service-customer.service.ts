import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/model/CustomerPost';

@Injectable({
  providedIn: 'root'
})
export class ServiceCustomerService {

  private API_URL = "http://localhost:8080/api/customer";

  constructor(private _httpClient: HttpClient) { }

  findAllPostByUsername(page: number): Observable<Post[]> {
    return this._httpClient.get<Post[]>(`${this.API_URL}?page=${page}`);
  }
}
