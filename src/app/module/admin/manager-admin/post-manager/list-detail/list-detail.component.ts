import { Component, OnInit } from '@angular/core';
import {Post} from '../../../../../model/Post';
import {ServicePostService} from '../../../../service/service-post/service-post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListDetailComponent implements OnInit {
  public _postList: Post[] = [];

  constructor(private _postService: ServicePostService,
              private _router: Router) { }

  ngOnInit(): void {
    this.getListPostListDetail()
  }

  getListPostListDetail() {
    this._postService.getAllPostListDetail().subscribe(data => {
      console.log("Get success" + JSON.stringify(data))
      console.log(data.content);
      this._postList = data.content;
    }, error => {
      console.log("get " + error + " on MainAdminComponent at getListPostDetail")
    })
  }


  get postList(): Post[] {
    return this._postList;
  }
}
