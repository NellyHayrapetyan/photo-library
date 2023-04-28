import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
})
export class FavoritesComponent implements OnInit {
  public favoriteImages: string[] = [];

  constructor() {}

  ngOnInit() {
    this.favoriteImages = Object.keys(localStorage);
  }

  openSinglePicture(image: string) {
    //ToDo navigate to single image page
  }
}
