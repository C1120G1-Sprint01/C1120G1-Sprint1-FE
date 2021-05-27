import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Banner} from '../model/banner';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ServiceBannerService} from '../../../../service/service-banner/service-banner.service';

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

  public banner: Banner;
  public formCreateBanner: FormGroup;

  ngOnInit(): void {
    this.formCreateBanner = new FormGroup(
      {
        id: new FormControl(null),
        duration: new FormControl('', [Validators.required]),
        image: new FormControl('aaa', [Validators.required]),
        position: new FormControl('', [Validators.required]),
        size: new FormControl('', [Validators.required])
      }
    );
  }

  createBanner() {
    this.bannerManagementService.addAdvertiseBanner(this.formCreateBanner.value).subscribe((data) => {
      this.dialog.closeAll();
      this.snackBar.open('Thêm Mới Banner Thành Công', 'Ẩn đi', {duration: 6000});
    });
  }

  closeAddFormBanner() {
    this.dialog.closeAll();
  }
}
