import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ServiceBannerService} from '../../../../service/service-banner/service-banner.service';
import {AddBannerManagerComponent} from '../add-banner-manager/add-banner-manager.component';
import {EditBannerManagerComponent} from '../edit-banner-manager/edit-banner-manager.component';
import {Banner} from '../model/banner';
import {interval} from 'rxjs';


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
    const changeBySecond = interval(60000).subscribe(() => {
      this.bannerManagementService.showAllAdvertiseBanner().subscribe((data) => {
        this.listBanner = data;
      });
    });
  }

  openFormAddBanner() {
    const dialogRef = this.dialog.open(AddBannerManagerComponent, {
      width: '1000px',
      height: '900px',
      disableClose: true
    });
    dialogRef.afterClosed().subscribe((data) => {
      this.ngOnInit();
    });
  }
  openFormEditBanner(bannerId) {
    const dialogRef = this.dialog.open(EditBannerManagerComponent, {
      width: '1000px',
      height: '900px',
      data: bannerId,
      disableClose: true
    });
    dialogRef.afterClosed().subscribe((data) => {
      this.ngOnInit();
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
    } else {
      const hour = Math.floor((seconds % 86400) / 3600);
      if (hour >= 1) {
        return hour + ' giờ';
      } else {
        return 'sắp hết hạn';
      }
    }
  }

}
