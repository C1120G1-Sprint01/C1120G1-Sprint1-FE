import { Component, OnInit } from '@angular/core';
import {Post} from '../../../../../model/Post';
import {ServicePostService} from '../../../../service/service-post/service-post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-wait',
  templateUrl: './list-wait.component.html',
  styleUrls: ['./list-wait.component.css']
})
export class ListWaitComponent implements OnInit {
  private _postList: Post[] = [];

  constructor(private _postService: ServicePostService,
              private _router: Router) { }

  ngOnInit(): void {
    this.getListPostListWait();
  }

  getListPostListWait() {
    this._postService.getAllPostListWait().subscribe(data => {
      console.log("Get success" + JSON.stringify(data))
      console.log(data.content);
      this._postList = data.content;
    }, error => {
      console.log("get " + error + " on MainAdminComponent at getListPostDetail")
    });
  }


  get postList(): Post[] {
    return this._postList;
  }
}
