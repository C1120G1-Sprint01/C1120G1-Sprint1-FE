import { Component, OnInit } from '@angular/core';
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
  openFormAddBanner(){
    this.dialog.open(AddBannerManagerComponent, {
      width: '1200px',
      height: '1000px',
      disableClose: true
    });
  }
}
