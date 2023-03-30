import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imageSrc: string = "https://upload.wikimedia.org/wikipedia/commons/9/92/Open_book_nae_02.svg";
  showPreview = false;
  constructor() { }
  checkpreview() {
    this.showPreview = !this.showPreview;
  }

  ngOnInit(): void {

  }

}


