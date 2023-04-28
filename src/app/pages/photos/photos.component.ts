import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../services/images.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
})
export class PhotosComponent implements OnInit {
  public images$: Observable<string[]> = new Observable();

  constructor(private imageService: ImagesService) {}

  ngOnInit() {
    this.images$ = this.imageService.getImages(1);
  }

  addToFavorites(image: string) {
    if (localStorage.getItem(image)) {
      return;
    }
    localStorage.setItem(image, image);
  }
}
