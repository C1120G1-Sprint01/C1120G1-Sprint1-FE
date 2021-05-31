import { Component, OnInit } from '@angular/core';
import {Post} from '../../../../../model/Post';
import {ServicePostService} from '../../../../service/service-post/service-post.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-wait-admin',
  templateUrl: './wait-admin.component.html',
  styleUrls: ['./wait-admin.component.css']
})
export class WaitAdminComponent implements OnInit {
  public postWait: Post;

  constructor(private _postService: ServicePostService,
              private _activatedRoute: ActivatedRoute,
              private _router: Router) { }

  ngOnInit(): void {
    let index = this._activatedRoute.snapshot.params["postId"];
    this._postService.getPostApproveByIndex(index).subscribe(data => {
      this.postWait = data;
    });
  }

  onWait() {
    this._postService.waitPost(this.postWait.postId).subscribe(data => {
      this._router.navigateByUrl("/admin/listApprove");
    });
  }
}
