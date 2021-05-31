import { Component, OnInit } from '@angular/core';
import {Post} from '../../../../../model/Post';
import {ServicePostService} from '../../../../service/service-post/service-post.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-delete-wait',
  templateUrl: './delete-wait.component.html',
  styleUrls: ['./delete-wait.component.css']
})
export class DeleteWaitComponent implements OnInit {
  public postDelete: Post;

  constructor(private _postService: ServicePostService,
              private _activatedRoute: ActivatedRoute,
              private _router: Router) { }

  ngOnInit(): void {
    let index = this._activatedRoute.snapshot.params["postId"];
    this._postService.getPostWaitByIndex(index).subscribe(data => {
      this.postDelete = data;
    });
  }

  onDelete() {
    this._postService.deleteWait(this.postDelete.postId).subscribe(data => {
      this._router.navigateByUrl("/admin/listWait");
    });
  }
}
