import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ServiceBannerService} from '../../../../service/service-banner/service-banner.service';
import {AddBannerManagerComponent} from '../add-banner-manager/add-banner-manager.component';
import {Banner} from '../model/banner';

@Component({
  selector: 'app-list-banner-manager',
  templateUrl: './list-banner-manager.component.html',
  styleUrls: ['./list-banner-manager.component.css']
})
export class ListBannerManagerComponent implements OnInit {

  constructor(private bannerManagementService: ServiceBannerService,
              private dialog: MatDialog) {
  }

  public listBanner: Banner[];

  ngOnInit(): void {
    this.bannerManagementService.showAllAdvertiseBanner().subscribe((data) => {
      this.listBanner = data;
    });
  }

  openFormAddBanner() {
    this.dialog.open(AddBannerManagerComponent, {
      width: '1200px',
      height: '1000px',
      disableClose: true
    });
  }

  getTimeDuration(dateDuration: Date) {
    const seconds = (new Date(dateDuration).getTime() - new Date().getTime()) / 1000;
    const date = Math.floor(seconds / 86400);
    if (date >= 30) {
      const month = Math.floor(date / 30);
      const day = Math.floor(date % 30);
      if (day > 0) {
        return month + ' tháng ' + day + ' ngày';
      } else {
        return month + ' tháng';
      }
    } else if (date > 0) {
      return date + ' ngày';
    }else {
      return '';
    }
  }
}
