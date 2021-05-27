import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ServiceAdminService} from "../../../../service/service-admin/service-admin.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-delete-customer-manager',
  templateUrl: './delete-customer-manager.component.html',
  styleUrls: ['./delete-customer-manager.component.css']
})
export class DeleteCustomerManagerComponent implements OnInit {
  @Input()
  deleteName: string;

  @Input()
  deleteId: number

  @Output()
  deleteComplete = new EventEmitter<boolean>();
  constructor(private serviceAdminService: ServiceAdminService,
              private router: Router) { }

  ngOnInit(): void {
  }

  deletePatient() {
    this.serviceAdminService.deleteUser(this.deleteId).subscribe(data => {
      document.getElementById('closeModal').click();
      this.deleteComplete.emit(true);
    });

  }
}
