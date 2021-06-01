import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ServiceAdminService} from "../../../service/service-admin/service-admin.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-delete-child-category',
  templateUrl: './delete-child-category.component.html',
  styleUrls: ['./delete-child-category.component.css']
})
export class DeleteChildCategoryComponent implements OnInit {
  @Input()
  deleteId: number;
  @Input()
  deleteName: string;

  @Output()
  deleteComplete = new EventEmitter<boolean>();

  constructor(public serviceAdminService: ServiceAdminService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  deleteChildCategory() {
    this.serviceAdminService.deleteChildCategory(this.deleteId).subscribe(data => {
      document.getElementById('closeModal').click();
      this.deleteComplete.emit(true);
    });
    this.toastr.success('Xóa Thành Công !', 'Chuyên mục !');
  }
}
