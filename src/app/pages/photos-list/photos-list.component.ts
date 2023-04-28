import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../services/images.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.scss']
})
export class PhotosListComponent implements OnInit {
  public images$?: Observable<string[]>;

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
