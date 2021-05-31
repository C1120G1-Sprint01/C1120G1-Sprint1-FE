import { Component, OnInit } from '@angular/core';
import {Post} from '../../../../../model/Post';
import {ServicePostService} from '../../../../service/service-post/service-post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-admin',
  templateUrl: './main-admin.component.html',
  styleUrls: ['./main-admin.component.css']
})
export class MainAdminComponent implements OnInit {
  postList: Post[] = [];

  constructor(private _postService: ServicePostService,
              private _router: Router) { }

  ngOnInit(): void {
    this.getAdminPage();
  }

  getAdminPage() {
    this._postService.getAdminPage().subscribe(data => {
      // console.log("Get success" + JSON.stringify(data))
      // this.postList = data;
    }, error => {
      console.log("get " + error + " on MainAdminComponent at getAdminPage")
    })
  }
}
