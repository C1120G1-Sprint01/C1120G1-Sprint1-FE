import { Injectable } from '@angular/core';
import {Category} from '../../../model/Category';
import {ChildCategory} from '../../../model/ChildCategory';
import {Observable} from "rxjs";
import {User} from "../../../model/User";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Account} from "../../../model/Account";
import {Ward} from "../../../model/Ward";

@Injectable({
  providedIn: 'root'
})
export class ServiceAdminService {

   API_URL_USER: string = "http://localhost:8080/admin/userList";
   API_URL_ACCOUNT: string = "http://localhost:8080/account";
   API_URL_PROVINCE: string = "http://localhost:8080/province";
   API_URL_DISTRICT: string = "http://localhost:8080/district";
   API_URL_WARD: string = "http://localhost:8080/ward";
  public baseUrl = 'http://localhost:8080';

  httpOptions: any;
  // private searchBaseUrl: string;

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
    return this.httpClient.get<Category[]>(this.baseUrl + '/main-category/category/');
  }

  getAllChildCategory(): Observable<ChildCategory[]> {
    return this.httpClient.get<ChildCategory[]>(this.baseUrl + '/main-category/child-category/');
  }

  getCategoryById(id:number): Observable<Category> {
    return this.httpClient.get<Category>(this.baseUrl + '/main-category' + '/category/' + id)
  }

  getChildCategoryById(id:number): Observable<ChildCategory> {
    return this.httpClient.get<ChildCategory>(this.baseUrl + '/main-category' + '/child-category/' + id)
  }

  createCategory(category: Category): Observable<Category> {
    return this.httpClient.post<Category>(this.baseUrl + '/main-category/category' + '/create-category' , category);
  }

  createChildCategory(childCategory: ChildCategory): Observable<ChildCategory> {
    return this.httpClient.post<ChildCategory>(this.baseUrl + '/main-category/child-category' + '/create-child-category' , childCategory);
  }

  updateCategory(category): Observable<Category> {
    return this.httpClient.put<Category>(this.baseUrl + '/main-category/category' + '/edit-category', category);
  }
  updateChildCategory(childCategory): Observable<ChildCategory> {
    return this.httpClient.put<ChildCategory>(this.baseUrl + '/main-category/child-category' + '/edit-child-category', childCategory);
  }

  deleteCategory(id: number) {
    return this.httpClient.delete<Category>(this.baseUrl + '/main-category/category/delete-category/' + id);
  }
  deleteChildCategory(id: number): Observable<ChildCategory> {
    return this.httpClient.get(this.baseUrl + '/main-category/child-category' + '/delete-child-category/' + id);
  }
  getAllChildByChildNameAndName(childCategoryName: string, categoryName: string): Observable<ChildCategory[]> {

    return this.httpClient.get<ChildCategory[]>(this.baseUrl + '/main-category/child-category/search?' +
      'childCategoryName=' + childCategoryName + '&categoryName=' + categoryName)
  }

  getAllUser(): Observable<User[]> {
      return this.httpClient.get<User[]>(this.API_URL_USER);
  }

  getAllAccount(): Observable<Account[]> {
      return this.httpClient.get<Account[]>(this.API_URL_ACCOUNT);
  }

  getAllWard(): Observable<Ward[]> {
      return this.httpClient.get<Ward[]>(this.API_URL_WARD);
  }

  getUserById(id: number): Observable<User[]> {
    return this.httpClient.get<User[]>(this.API_URL_USER + '/' + id);
  }

  editUser(user: User, id: number): Observable<User[]> {
    return this.httpClient.put<User[]>(this.API_URL_USER + '/edit/' + id, user);
  }

  deleteUser(id: number): Observable<User[]> {
    return this.httpClient.delete<User[]>(this.API_URL_USER + '/delete/' + id);
  }



}
