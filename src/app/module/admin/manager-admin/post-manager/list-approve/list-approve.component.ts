import { Component, OnInit } from '@angular/core';
import {Post} from '../../../../../model/Post';
import {ServicePostService} from '../../../../service/service-post/service-post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-approve',
  templateUrl: './list-approve.component.html',
  styleUrls: ['./list-approve.component.css']
})
export class ListApproveComponent implements OnInit {
  public _postList: Post[] = [];

  constructor(private _postService: ServicePostService,
              private _router: Router) { }

  ngOnInit(): void {
    this.getListPostListApprove();
  }

  getListPostListApprove() {
    this._postService.getAllPostListApprove().subscribe(data => {
      console.log("Get success" + JSON.stringify(data))
      this._postList = data.content;
    }, error => {
      console.log("get " + error + " on MainAdminComponent at getListPostApprove")
    })
  }

  get postList(): Post[] {
    return this._postList;
  }
}
