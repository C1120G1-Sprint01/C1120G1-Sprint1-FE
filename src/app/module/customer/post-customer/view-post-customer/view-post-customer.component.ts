import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Post} from '../../../../model/Post';
import {ServicePostService} from '../../../service/service-post/service-post.service';
import {DateUtilService} from '../../../service/date-util/date-util.service';
import {CommonUtilService} from '../../../service/common-util/common-util.service';
import {SecurityService} from '../../../service/security/security.service';

@Component({
  selector: 'app-view-post-customer',
  templateUrl: './view-post-customer.component.html',
  styleUrls: ['./view-post-customer.component.css']
})
export class ViewPostCustomerComponent implements OnInit {

  post: Post;
  postAddress: string = '';
  userAddress: string = '';
  timeDiff: string = '';
  categorySlug: string = '';
  childCategorySlug: string = '';

  constructor(private _postService: ServicePostService,
              private _dateUtilService: DateUtilService,
              private _commonUtilService: CommonUtilService,
              private _securityService: SecurityService,
              private _activatedRoute: ActivatedRoute,
              private _router: Router) {
  }

  ngOnInit(): void {
    this.initData();
  }

  initData() {
    const id = this._activatedRoute.snapshot.params['id'];

    this._postService.getPostById(id).subscribe(data => {
      let userWard = data.user.ward.wardName;
      let userDistrict = data.user.ward.district.districtName;
      let userProvince = data.user.ward.district.province.provinceName;

      let postWard = data.ward.wardName;
      let postDistrict = data.ward.district.districtName;
      let postProvince = data.ward.district.province.provinceName;
      let postDateTime = data.postDateTime;
      let postCategory = data.childCategory.category.categoryName;
      let postChildCategory = data.childCategory.childCategoryName;

      this.post = data;
      this.postAddress = [postWard, postDistrict, postProvince].join(', ');
      this.userAddress = [userWard, userDistrict, userProvince].join(', ');
      this.timeDiff = this._dateUtilService.getDiffToNow(postDateTime);
      this.categorySlug = this._commonUtilService.convertToSlug(postCategory);
      this.childCategorySlug = this._commonUtilService.convertToSlug(postChildCategory);
    });
  }

  goToChat() {
    if (this._securityService.isLoggedIn) {
      this._router.navigateByUrl('/');
    } else {
      this._router.navigateByUrl('/login');
    }
  }
}
