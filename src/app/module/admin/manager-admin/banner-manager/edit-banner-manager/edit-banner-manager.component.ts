import {Component, Inject, OnInit} from '@angular/core';
import {ServiceBannerService} from '../../../../service/service-banner/service-banner.service';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AngularFireStorage} from '@angular/fire/storage';
import {Position} from '../model/position';
import {Size} from '../model/size';
import {Banner} from '../model/banner';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {finalize} from 'rxjs/operators';
import {LoadingComponent} from '../loading/loading.component';

@Component({
  selector: 'app-edit-banner-manager',
  templateUrl: './edit-banner-manager.component.html',
  styleUrls: ['./edit-banner-manager.component.css']
})
export class EditBannerManagerComponent implements OnInit {
  constructor(private bannerManagementService: ServiceBannerService,
              private dialog: MatDialog,
              private snackBar: MatSnackBar,
              private storage: AngularFireStorage,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  public messageImageError;
  public avatar = null;
  public selectedImage: any = null;
  public listPosition: Position[];
  public listSize: Size[];
  public banner: Banner;
  public dayTime;
  public formCreateBanner: FormGroup;

  ngOnInit(): void {
    this.bannerManagementService.findBannerById(this.data).subscribe((data) => {
      this.banner = data;
      console.log(this.banner);
      this.formCreateBanner = new FormGroup(
        {
          bannerId: new FormControl(null),
          duration: new FormControl('', [Validators.required]),
          image: new FormControl(''),
          position: new FormControl(this.banner.position, [Validators.required]),
          size: new FormControl(this.banner.size, [Validators.required])
        }
      );
    });
    this.bannerManagementService.showAllPosition().subscribe((data) => {
      this.listPosition = data;
    });
    this.bannerManagementService.showAllSize().subscribe((data) => {
      this.listSize = data;
    });

  }


  editBanner() {
    if (this.formCreateBanner.valid) {
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
      const milliseconds = new Date().getTime() + this.dayTime * 60 * 60 * 24 * 1000;
      this.formCreateBanner.value.duration = new Date(milliseconds);
      const name = this.selectedImage.name;
      const stringImage = name.substring(name.length - 3).toLowerCase();
      if (stringImage === 'png' || stringImage === 'jpg') {
        const fileName = 'imageBanner/' + name;
        const fileRef = this.storage.ref(fileName);
        this.openLoading();
        this.storage.upload(fileName, this.selectedImage).snapshotChanges().pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe((url) => {
                this.formCreateBanner.value.image = url;
                this.bannerManagementService.addAdvertiseBanner(this.formCreateBanner.value).subscribe((data) => {
                  this.dialog.closeAll();
                  this.snackBar.open('Chỉnh sửa Banner Thành Công', 'Ẩn đi', {duration: 6000});
                });
              }
            );
          })).subscribe();
      }
    }
    if (this.avatar === null) {
      this.messageImageError = '*Không được bỏ trống ảnh';
    }
  }

  openLoading() {
    const dialogRef = this.dialog.open(LoadingComponent, {
      width: '500px',
      height: '200px',
      disableClose: true
    });
  }

  closeEditFormBanner() {
    this.dialog.closeAll();
  }

  showImage(image) {
    if (image.target.files && image.target.files[0]) {
      const file = image.target.files[0].name;
      const path = file.substring(file.length - 3).toLowerCase();
      if (path === 'png' || path === 'jpg') {
        const reader = new FileReader();
        reader.onload = (e: any) => this.avatar = e.target.result;
        reader.readAsDataURL(image.target.files[0]);
        this.selectedImage = image.target.files[0];
        this.messageImageError = '';
      } else {
        this.avatar = null;
        this.messageImageError = '*Tệp ảnh bạn chọn không hợp lệ!';
        this.selectedImage = null;
      }
    } else {
      this.selectedImage = null;
      this.messageImageError = '*Không được bỏ trống ảnh';
    }
  }

  removeImage() {
    this.avatar = null;
  }

  get duration() {
    return this.formCreateBanner.get('duration');
  }

  get position() {
    return this.formCreateBanner.get('position');
  }

  get size() {
    return this.formCreateBanner.get('size');
  }

  get image() {
    return this.formCreateBanner.get('image');
  }
}
