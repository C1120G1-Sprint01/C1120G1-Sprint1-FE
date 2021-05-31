import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ServiceCustomerService} from "../../../service/service-customer/service-customer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AddressService} from "../../../service/service-customer/address.service";
import {CategoryService} from "../../../service/service-customer/category.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-add-post-customer',
  templateUrl: './add-post-customer.component.html',
  styleUrls: ['./add-post-customer.component.css']
})
export class AddPostCustomerComponent implements OnInit {
  form: FormGroup;
  province;
  district;
  category;

  provinces;
  districts;
  wards;
  categories;
  childCategories;
  status =
    {
      "statusId": 2,
      "statusName": "Đợi duyệt"
    };

  constructor(
    private _formBuilder: FormBuilder,
    private _serviceCustomer: ServiceCustomerService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _addressService: AddressService,
    private _categoryService: CategoryService,
    private _toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.formInit();

    this._addressService.findAllProvince().subscribe(data => {
      this.provinces = data;
    });

    this._categoryService.findAllCategory().subscribe(data => {
      this.categories = data;
    });
    this._addressService.findAllDistrictByProvinceId(this.province.provinceId).subscribe(data => {
      this.districts = data;
    });

    this._addressService.findAllWardByDistrictId(this.district.districtId).subscribe(data => {
      this.wards = data;
    });

    this._categoryService.findAllChildCategoryByCategoryId(this.category.categoryId).subscribe(data => {
      this.childCategories = data;
    });
  }

  formInit() {
    this.form = this._formBuilder.group({
      postId: [""],
      posterName: ["", [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]+$')]],
      phone: ["", [Validators.required, Validators.pattern('^[\\d]{10,11}$')]],
      email: ["", [Validators.required, Validators.pattern('^([a-zA-Z0-9]+-*_*)+@(gmail|yahoo)*.com$')]],
      ward: ["", [Validators.required]],
      childCategory: ["", [Validators.required]],
      postType: [""],
      title: ["", [Validators.required]],
      description: ["", [Validators.required]],
      postDateTime: [""],
      price: ["", [Validators.pattern('^[\\d]+$')]],
      enabled: [""],
      status: [""],
      user: [""],
      imageSet: [""]
    });
  }

  submitForm() {
    if (this.form.valid) {
      this._serviceCustomer.savePost(this.form.value).subscribe(value => {
        this._router.navigateByUrl("/homepage");
        this._toastr.success("Đăng tin thành công!", "Thành công!");
      }, error => {
        this._toastr.error("Đã có lỗi xảy ra!", "Lỗi!");
        console.log(error);
      })
    }
  }

  cancelUpdate() {
    this._router.navigateByUrl("/homepage");
    this._toastr.warning("Huỷ đăng tin mới thành công!", "Hủy đăng tin mới!");
  }

  onChangeProvince() {
    this._addressService.findAllDistrictByProvinceId(this.province.provinceId).subscribe(data => {
      this.districts = data;
      this._addressService.findAllWardByDistrictId(this.districts[0].districtId).subscribe(data => {
        this.wards = data;
        // set data to form => binding ward to form when change province
        this.form.value.ward = this.wards[0];
      })
    })
  }

  onChangeDistrict() {
    this._addressService.findAllWardByDistrictId(this.district.districtId).subscribe(data => {
      this.wards = data;
    })
  }

  onChangeCategory() {
    this._categoryService.findAllChildCategoryByCategoryId(this.category.categoryId).subscribe(data => {
      this.childCategories = data;
      this.form.value.childCategory = this.childCategories[0];
    })
  }
}
