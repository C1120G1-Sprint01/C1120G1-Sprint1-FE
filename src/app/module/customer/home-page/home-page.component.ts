import {Component, OnInit} from '@angular/core';
import {differenceInDays, differenceInHours, differenceInMinutes} from 'date-fns';
import {ServicePostService} from "../../service/service-post/service-post.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  posts;
  listTime: string[] = [];
  private now: Date;
  private diff: Date;
  resultTime: number = 0;

  constructor(private _postService: ServicePostService) {
  }

  ngOnInit(): void {
    this.onList(0);
  }

  onList(page: number) {
    this._postService.getListPost(page).subscribe(data => {
      this.posts = data;
      for (let post of this.posts.content) {
        this.listTime.push(this.calculateTime(post.postDateTime))
      }
      console.log(this.listTime);
    }, error => {
      console.log("error: " + error);
    });
  }

  calculateTime(diff: string): string {
    console.log("Get Time")
    this.now = new Date()
    this.diff = new Date(diff);
    this.resultTime = differenceInMinutes(this.now, this.diff);
    if (this.resultTime >= (24 * 60)) {
      return differenceInDays(this.now, this.diff) + " ngày trước";
    } else if (this.resultTime >= 60) {
      return differenceInHours(this.now, this.diff) + " giờ trước";
    }
    return this.resultTime + " phút trước";
  }

  openNav() {
    document.getElementById("myNav").style.width = "50%";
  }

  closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
}