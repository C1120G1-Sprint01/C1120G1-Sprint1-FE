import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../../../model/post';
import {ServicePostService} from '../../../service/service-post/service-post.service';

@Component({
  selector: 'app-view-post-customer',
  templateUrl: './view-post-customer.component.html',
  styleUrls: ['./view-post-customer.component.css']
})
export class ViewPostCustomerComponent implements OnInit {

  post: Post;

  constructor(private _postService: ServicePostService,
              private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.initData();
  }

  initData() {
    const id = this._activatedRoute.snapshot.params['id'];
    this._postService.getPostById(id).subscribe(data => {
      this.post = data;
      console.log(this.post);
    });
  }

}
