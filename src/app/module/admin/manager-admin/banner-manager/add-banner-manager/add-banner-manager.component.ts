import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Banner} from '../model/banner';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ServiceBannerService} from '../../../../service/service-banner/service-banner.service';
import {Size} from '../model/size';
import {Position} from '../model/position';

@Component({
  selector: 'app-add-banner-manager',
  templateUrl: './add-banner-manager.component.html',
  styleUrls: ['./add-banner-manager.component.css']
})
export class AddBannerManagerComponent implements OnInit {
  constructor(private bannerManagementService: ServiceBannerService,
              private dialog: MatDialog,
              private snackBar: MatSnackBar) {
  }

  public listPosition: Position[];
  public listSize: Size[];
  public banner: Banner;
  public dayTime;
  public formCreateBanner: FormGroup;

  ngOnInit(): void {
    this.bannerManagementService.showAllPosition().subscribe((data) => {
      this.listPosition = data;
    });
    this.bannerManagementService.showAllSize().subscribe((data) => {
      this.listSize = data;
    });
    this.formCreateBanner = new FormGroup(
      {
        bannerId: new FormControl(null),
        duration: new FormControl('', [Validators.required]),
        image: new FormControl('aaa', [Validators.required]),
        position: new FormControl('', [Validators.required]),
        size: new FormControl('', [Validators.required])
      }
    );
  }


  createBanner() {
    switch (this.formCreateBanner.value.duration) {
      case '1':
        this.dayTime = 7;
        break;
      case '2':
        this.dayTime = 14;
        break;
      case '3':
        this.dayTime = 30;
        break;
      case '4':
        this.dayTime = 60;
        break;
      case '5':
        this.dayTime = 180;
        break;
      default:
    }
    console.log(this.dayTime);
    const date = new Date();
    console.log(date);
    const milliseconds = date.getTime() + this.dayTime * 60 * 60 * 24 * 1000;
    console.log(milliseconds);
    this.formCreateBanner.value.duration = new Date(milliseconds);
    this.bannerManagementService.addAdvertiseBanner(this.formCreateBanner.value).subscribe((data) => {
      this.dialog.closeAll();
      this.snackBar.open('Thêm Mới Banner Thành Công', 'Ẩn đi', {duration: 6000});
    });
  }

  closeAddFormBanner() {
    this.dialog.closeAll();
  }
}
