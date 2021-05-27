import { Injectable } from '@angular/core';
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
  httpOptions:any;
  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'}),
      'Access-Control-Allow-Origin': 'http://localhost:4200/',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'Access-Control-Allow-Credentials': "true"
    };
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
