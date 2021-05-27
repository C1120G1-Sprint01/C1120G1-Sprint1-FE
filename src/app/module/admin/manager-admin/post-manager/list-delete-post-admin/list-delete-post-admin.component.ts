import { Component, OnInit } from '@angular/core';
import {Post} from "../../../../../model/post";
import {ServicePostService} from "../../../../service/service-post/service-post.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-list-delete-post-admin',
  templateUrl: './list-delete-post-admin.component.html',
  styleUrls: ['./list-delete-post-admin.component.css']
})
export class ListDeletePostAdminComponent implements OnInit {
  postList: Post [] = [];

  deleteId: number;
  deleteName: string;
  public postId = '';
  public name = '';

  constructor(private _postService: ServicePostService,
              private _router: Router,
              private _activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.postId = '';
    this.name = '';
    this._postService.findAll().subscribe(data => {
      this.postList = data;
    }, error => {
      console.log(error)
    })
  }
  deleteSuccess() {
    this.ngOnInit();
  }
}
