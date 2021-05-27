import {Injectable} from '@angular/core';
import {User} from "../../../model/user/User";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceCustomerService {
  private API_URL = "http://localhost:8080/";

  constructor(private httpClient: HttpClient) {
  }


  save(user: User): Observable<User> {
    console.log(user)
    return this.httpClient.post<User>(this.API_URL + "user/create", user)
  }
}
