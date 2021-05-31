import { Component, OnInit } from '@angular/core';
import {Post} from '../../../../../model/Post';
import {ServicePostService} from '../../../../service/service-post/service-post.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-confirm-admin',
  templateUrl: './confirm-admin.component.html',
  styleUrls: ['./confirm-admin.component.css']
})
export class ConfirmAdminComponent implements OnInit {
  public postApprove: Post;

  constructor(private _postService: ServicePostService,
              private _activatedRoute: ActivatedRoute,
              private _router: Router) { }

  ngOnInit(): void {
    let index = this._activatedRoute.snapshot.params["postId"];
    this._postService.getPostApproveByIndex(index).subscribe(data => {
      this.postApprove = data;
    });
  }

  onApprove() {
    this._postService.approvePost(this.postApprove.postId).subscribe(data => {
      this._router.navigateByUrl("/admin/listApprove");
    });
  }
}
