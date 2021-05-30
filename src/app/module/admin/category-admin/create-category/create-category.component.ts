import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ServiceAdminService} from "../../../service/service-admin/service-admin.service";

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
  formCreate: FormGroup;

  constructor(private _fb: FormBuilder,
              private router: Router,
              private serviceAdminService: ServiceAdminService) { }

  ngOnInit(): void {
    this.formCreate = this._fb.group({
      categoryName: ['', [Validators.required, Validators.pattern(/^[0-9a-zA-ZàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđĐ\s]*$/)]],
    })
  }

  save() {
    console.log(this.formCreate.getRawValue());
    this.serviceAdminService.createCategory(this.formCreate.getRawValue()).subscribe(data => {
      console.log('chuyên mục đã được tạo!');
      this.router.navigateByUrl('main-category/category')
    })
  }
}
