import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {ServiceAdminService} from "../../../service/service-admin/service-admin.service";
import {Category} from "../../../../model/Category";
import {ChildCategory} from "../../../../model/ChildCategory";

@Component({
  selector: 'app-edit-child-category',
  templateUrl: './edit-child-category.component.html',
  styleUrls: ['./edit-child-category.component.css']
})
export class EditChildCategoryComponent implements OnInit {
  formEdit: FormGroup;
  childCategoryEdit: ChildCategory;
  categoryList: Category[];
  childCategoryId;

  constructor(private _fb: FormBuilder,
              private router: Router,
              private serviceAdminService: ServiceAdminService,
              private active: ActivatedRoute) {

    //lấy danh sách category hiển thị cho người dùng chọn lại
    this.serviceAdminService.getAllCategory().subscribe(data => {
      this.categoryList = data;
      console.log(data);

    });

  }

  ngOnInit(): void {

    // let id = this.active.snapshot.params['id'];

    this.formEdit = this._fb.group({
      childCategoryId: [''],
      childCategoryName: ['', [Validators.required, Validators.pattern(/^[0-9a-zA-ZÁàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđĐ\s]*$/)]],
      // nơi chưa đối tương category cha
      category: [''],
    });

    //lấy lại dữ liệu người dùng đã thêm trước đó để chỉnh sửa
    this.active.paramMap.subscribe((data: ParamMap) => {
      this.childCategoryId = data.get('id');
      this.serviceAdminService.getChildCategoryById(this.childCategoryId).subscribe((data: ChildCategory) => {
        this.childCategoryEdit = data;
        console.log(data);
        this.formEdit.patchValue(this.childCategoryEdit);
      });
    });
  }

  compareFn(c1: Category, c2: Category): boolean {
    return c1 && c2 ? c1.categoryId === c2.categoryId : c1 === c2;
  }

  save() {
    console.log(this.formEdit.getRawValue());
    //Khi a submit thì form sẽ được đưa xuống gồm name và thằng cha
    this.serviceAdminService.updateChildCategory(this.formEdit.getRawValue()).subscribe(data => {
      console.log('chuyên mục cha đã được chỉnh sửa!');
      this.router.navigateByUrl('main-category/child-category')
    })
  }

  back() {
    this.formEdit.patchValue(this.childCategoryEdit)
  }
}
