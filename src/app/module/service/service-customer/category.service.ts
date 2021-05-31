import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private API_URL_CATEGORY = "http://localhost:8080/api/category";
  private API_URL_CHILD_CATEGORY = "http://localhost:8080/api/child-category";

  constructor(private _httpClient: HttpClient) { }

  findAllCategory(): Observable<any> {
    return this._httpClient.get<any>(`${this.API_URL_CATEGORY}`);
  }

  findAllChildCategoryByCategoryId(id: number): Observable<any> {
    return this._httpClient.get<any>(`${this.API_URL_CHILD_CATEGORY}/${id}`);
  }
}
