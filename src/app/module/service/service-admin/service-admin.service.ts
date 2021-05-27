import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../../../model/User";
import {HttpClient} from "@angular/common/http";
import {Account} from "../../../model/Account";
import {Ward} from "../../../model/Ward";

@Injectable({
  providedIn: 'root'
})
export class ServiceAdminService {
  public API_URL_USER = "http://localhost:3000/user";
  public API_URL_ACCOUNT = "http://localhost:3000/account";
  public API_URL_PROVINCE = "http://localhost:3000/province";
  public API_URL_DISTRICT = "http://localhost:3000/district";
  public API_URL_WARD = "http://localhost:3000/ward";
  constructor(private httpClient: HttpClient) { }

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
    return this.httpClient.put<User[]>(this.API_URL_USER + '/' + id, user);
  }

  deleteUser(id: number): Observable<User[]> {
    return this.httpClient.delete<User[]>(this.API_URL_USER + '/delete/' + id);
  }
}
