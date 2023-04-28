import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Image } from '../../models/Image';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
})
export class FavoritesComponent implements OnInit {
  public favoriteImages: Image[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.favoriteImages = Object.keys(localStorage).map((key: string) => ({ id: key, url: localStorage.getItem(key) || '' }));
  }

  openSinglePicture(image: Image): void {
    this.router.navigate(['photos', image.id], { state: { data: image.url } })
  }
}
