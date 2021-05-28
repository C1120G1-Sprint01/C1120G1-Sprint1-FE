import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressService } from 'src/app/module/service/service-customer/address.service';
import { ServiceCustomerService } from 'src/app/module/service/service-customer/service-customer.service';

@Component({
  selector: 'app-edit-post-customer',
  templateUrl: './edit-post-customer.component.html',
  styleUrls: ['./edit-post-customer.component.css']
})
export class EditPostCustomerComponent implements OnInit {

  refPost: FormGroup;
  id: number;
  province;
  district;
  category;

  provinces;
  districts;
  wards;

  constructor(private _formBuilder: FormBuilder,
    private _serviceCustomer: ServiceCustomerService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _addressService: AddressService) { }

  ngOnInit(): void {

    this._addressService.findAllProvince().subscribe(data => {
      this.provinces = data;
      console.log(data);
    });

    this.formInit();

    this.id = this._activatedRoute.snapshot.params["id"];
    console.log(this.id);
    this._serviceCustomer.findPostById(this.id).subscribe(oldData => {
      this.province = oldData.ward.district.province;
      console.log(this.province);
      this.district = oldData.ward.district;
      this.category = oldData.childCategory.category;
      this.refPost.patchValue(oldData);
      console.log(this.refPost.value);

      this._addressService.findAllDistrictByProvinceId(this.province.provinceId).subscribe(data => {
        this.districts = data;
        console.log(data);
      })

      this._addressService.findAllWardByDistrictId(this.district.districtId).subscribe(data => {
        this.wards = data;
        console.log(data);

      })
    })
  }

  formInit() {
    this.refPost = this._formBuilder.group({
      posterName: [""],
      phone: [""],
      email: [""],
      childCategory: [""],
      postType: [""],
      title: [""],
      description: [""],
      price: [""],
      ward: [""]
    });
  }

  onChangeProvince() {
    this._addressService.findAllDistrictByProvinceId(this.province.provinceId).subscribe(data => {
      this.districts = data;
      this.wards = [];
      console.log(data)
    })
  }

  onChangeDistrict() {
    this._addressService.findAllWardByDistrictId(this.district.districtId).subscribe(data => {
      this.wards = data;
      console.log(data)
    })
  }

  compareProvinces(o1: any, o2: any): boolean {
    return o1.provinceId === o2.provinceId;
  }

  compareDistricts(o1: any, o2: any): boolean {
    return o1.districtId === o2.districtId;
  }

  compareWards(o1: any, o2: any): boolean {
    return o1.wardId === o2.wardId;
  }

}
