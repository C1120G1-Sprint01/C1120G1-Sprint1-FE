import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Banner} from '../../admin/manager-admin/banner-manager/model/banner';

@Injectable({
  providedIn: 'root'
})
export class ServiceBannerService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json', Accept: 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  public API_BANNER = 'http://localhost:8080/admin/banner';

  showAllAdvertiseBanner(): Observable<any> {
    return this.http.get(this.API_BANNER);
  }

  addAdvertiseBanner(banner: Banner): Observable<any> {
    return this.http.post(this.API_BANNER + '/add', banner, this.httpOptions);
  }

  showAllPosition(): Observable<any> {
    return this.http.get(this.API_BANNER + '/position');
  }

  showAllSize(): Observable<any> {
    return this.http.get(this.API_BANNER + '/size');
  }

  findBannerById(bannerId: number): Observable<any> {
    return this.http.get(this.API_BANNER + '/' + bannerId);
  }
}
