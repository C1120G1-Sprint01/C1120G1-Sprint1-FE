import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ServiceBannerService} from '../../../../service/service-banner/service-banner.service';
import {AddBannerManagerComponent} from '../add-banner-manager/add-banner-manager.component';
import {EditBannerManagerComponent} from '../edit-banner-manager/edit-banner-manager.component';
import {Banner} from '../model/banner';
import {interval} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {MatSnackBar} from '@angular/material/snack-bar';
import {LoadingComponent} from '../loading/loading.component';


@Component({
  selector: 'app-list-banner-manager',
  templateUrl: './list-banner-manager.component.html',
  styleUrls: ['./list-banner-manager.component.css']
})
export class ListBannerManagerComponent implements OnInit {

  constructor(private bannerManagementService: ServiceBannerService,
              private dialog: MatDialog,
              private modalService: NgbModal,
              private snackBar: MatSnackBar) {
  }

  public listBanner: Banner[];
  public banner: Banner;
  public bannerCheck: Banner;
  public lengthListBanner: number;

  ngOnInit(): void {
    this.bannerManagementService.showAllAdvertiseBanner().subscribe((data) => {
      this.listBanner = data;
      this.lengthListBanner = this.listBanner.length;
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

  getTimeDuration(dateDuration: Date, bannerId: number) {
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
      const hourCheck = (seconds % 86400) / 3600;
      if (hour >= 1) {
        return hour + ' giờ';
      } else if (hour >= 0) {
        return 'sắp hết hạn';
      } else if (hourCheck <= 0) {
        this.bannerManagementService.deleteAdvertiseBanner(bannerId).subscribe((data) => {
          this.ngOnInit();
        });
      }
    }
  }

  openDeleteBanner(content, bannerChange: Banner) {
    this.banner = bannerChange;
    this.modalService.open(content, {windowClass: 'dark-modal'});
  }

  openLoading() {
    const dialogRef = this.dialog.open(LoadingComponent, {
      width: '500px',
      height: '200px',
      disableClose: true
    });
  }

  deleteBanner(bannerId: number, content2) {
    this.bannerManagementService.findBannerById(bannerId).subscribe((data) => {
      this.bannerCheck = data;
      if (this.bannerCheck === null) {
        this.modalService.open(content2, {windowClass: 'dark-modal'});
      } else {
        this.modalService.dismissAll();
        this.openLoading();
        setTimeout(() => {
          this.bannerManagementService.deleteAdvertiseBanner(bannerId).subscribe((data1) => {
            this.ngOnInit();
            this.dialog.closeAll();
            this.snackBar.open('Xóa Banner Thành Công', 'Ẩn đi', {duration: 6000});
          });
        }, 1500);
      }
    });
  }
}
