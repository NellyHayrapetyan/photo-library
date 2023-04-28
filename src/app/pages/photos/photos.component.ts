import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../services/images.service';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Image } from '../../models/Image';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
})
export class PhotosComponent implements OnInit {
  public images$: Observable<Image[]> = new Observable();

  constructor(private imageService: ImagesService, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.images$ = this.imageService.getImages(1);
  }

  addToFavorites(image: Image) {
    if (localStorage.getItem(image.id)) {
      this.snackBar.open(
        'Image already exists in favorites',
        'Close',
        {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'top',
        })

    } else {
      localStorage.setItem(image.id, image.url);
    }
  }
}
