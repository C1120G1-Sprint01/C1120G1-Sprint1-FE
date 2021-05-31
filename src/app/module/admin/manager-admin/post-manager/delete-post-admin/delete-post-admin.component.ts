import { Component, OnInit } from '@angular/core';
import {Post} from '../../../../../model/Post';
import {ServicePostService} from '../../../../service/service-post/service-post.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-delete-post-admin',
  templateUrl: './delete-post-admin.component.html',
  styleUrls: ['./delete-post-admin.component.css']
})
export class DeletePostAdminComponent implements OnInit {
  public postDelete: Post;

  constructor(private _postService: ServicePostService,
              private _activatedRoute: ActivatedRoute,
              private _router: Router) { }

  ngOnInit(): void {
    let index = this._activatedRoute.snapshot.params["postId"];
    this._postService.getPostApproveByIndex(index).subscribe(data => {
      this.postDelete = data;
    });
  }

  onDelete() {
    this._postService.deletePost(this.postDelete.postId).subscribe(data => {
      this._router.navigateByUrl("/admin/listApprove");
    });
  }
}
