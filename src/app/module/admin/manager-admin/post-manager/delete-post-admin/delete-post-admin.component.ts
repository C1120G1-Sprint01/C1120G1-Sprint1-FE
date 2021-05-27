import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ServicePostService} from "../../../../service/service-post/service-post.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-delete-post-admin',
  templateUrl: './delete-post-admin.component.html',
  styleUrls: ['./delete-post-admin.component.css']
})
export class DeletePostAdminComponent implements OnInit {

  @Input()
  deleteId: number;
  @Input()
  deleteName: string;

  @Output()
  deleteComplete = new EventEmitter<boolean>();


  constructor(
    public patientService: ServicePostService,
    public router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  deletePost() {
    this.patientService.deleteByIdPost(this.deleteId).subscribe(data => {
      document.getElementById('closeModal').click();
      this.deleteComplete.emit(true);
    });
  }
}
