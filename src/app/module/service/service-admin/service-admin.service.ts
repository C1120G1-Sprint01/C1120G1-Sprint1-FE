import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../../../model/Category';
import {ChildCategory} from '../../../model/ChildCategory';

@Injectable({
  providedIn: 'root'
})
export class ServiceAdminService {
  public baseUrl = 'http://localhost:8080';
  httpOptions: any;
  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'}),
      'Access-Control-Allow-Origin': 'http://localhost:4200/',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'Access-Control-Allow-Credentials': 'true'
    };
  }

  getAllCategory(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.baseUrl + '/category/');
  }

  getAllChildCategory(): Observable<ChildCategory[]> {
    return this.httpClient.get<ChildCategory[]>(this.baseUrl + '/child_category/');
  }

  createCategory(category: Category): Observable<Category> {
    return this.httpClient.post<Category>(this.baseUrl + '/category' + '/create' , category);
  }

  createChildCategory(childCategory: ChildCategory): Observable<ChildCategory> {
    return this.httpClient.post<ChildCategory>(this.baseUrl + '/child_category' + '/create' , childCategory);
  }

  updateCategory(id, category): Observable<Category> {
    return this.httpClient.put<Category>(this.baseUrl + '/category' + '/edit' + id, category);
  }
  updateChildCategory(id, childCategory): Observable<ChildCategory> {
    return this.httpClient.put<ChildCategory>(this.baseUrl + '/child_category' + '/edit' + id, childCategory);
  }

  deleteCategory(id: number) {
    return this.httpClient.delete<Category>(this.baseUrl + '/category' + '/create' + id);
  }
  deleteChildCategory(id: number) {
    return this.httpClient.delete<Category>(this.baseUrl + '/child_category' + '/create' + id);
  }

}
