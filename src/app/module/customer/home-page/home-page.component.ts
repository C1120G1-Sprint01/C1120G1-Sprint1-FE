import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  openNav() {
    document.getElementById("myNav").style.width = "50%";
  }

  closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  ngOnInit(): void {
    this.openNav();
    this.closeNav();
  }

}
