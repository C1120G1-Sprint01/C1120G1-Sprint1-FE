import { Component, OnInit } from '@angular/core';
import {Post} from '../../../../../model/Post';
import {ServicePostService} from '../../../../service/service-post/service-post.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-confirm-wait',
  templateUrl: './confirm-wait.component.html',
  styleUrls: ['./confirm-wait.component.css']
})
export class ConfirmWaitComponent implements OnInit {
  public postApprove: Post;

  constructor(private _postService: ServicePostService,
              private _activatedRoute: ActivatedRoute,
              private _router: Router) { }

  ngOnInit(): void {
    let index = this._activatedRoute.snapshot.params["postId"];
    this._postService.getPostWaitByIndex(index).subscribe(data => {
      this.postApprove = data;
    });
  }

  onApprove() {
    this._postService.approveWait(this.postApprove.postId).subscribe(data => {
      this._router.navigateByUrl("/admin/listWait");
    });
  }
}
