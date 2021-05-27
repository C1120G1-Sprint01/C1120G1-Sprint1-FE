import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Banner} from '../../admin/manager-admin/banner-manager/model/banner';

@Injectable({
  providedIn: 'root'
})
export class ServiceBannerService {
  constructor(private http: HttpClient) {
  }

  public API_BANNER = 'http://localhost:8080/admin/banner';

  showAllAdvertiseBanner(): Observable<any> {
    return this.http.get(this.API_BANNER);
  }

  addAdvertiseBanner(banner: Banner): Observable<any> {
    return this.http.post(this.API_BANNER + '/add', banner);
  }
}
