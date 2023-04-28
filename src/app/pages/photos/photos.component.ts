import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../services/images.service';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
})
export class PhotosComponent implements OnInit {
  public images$: Observable<string[]> = new Observable();

  constructor(private imageService: ImagesService, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.images$ = this.imageService.getImages(1);
  }

  addToFavorites(image: string) {
    if (localStorage.getItem(image)) {
      this.snackBar.open(
        'Image already exists in favorites',
        'Close',
        {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'top',
        })

    } else {
      localStorage.setItem(image, image);
    }
  }
}
