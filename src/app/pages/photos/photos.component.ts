import { Component, OnDestroy, OnInit } from '@angular/core';
import { ImagesService } from '../../services/images.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Image } from '../../models/Image';
import { fromEvent, Subject, takeUntil, throttleTime } from 'rxjs';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
})
export class PhotosComponent implements OnInit, OnDestroy {
  public images: Image[] = [];
  public destroy$: Subject<boolean> = new Subject<boolean>();
  public loading: boolean = false;
  constructor(private imageService: ImagesService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.loadMorePhotos();

    fromEvent(window, 'scroll').pipe(
      throttleTime(300),
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.onScroll();
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true)
    this.destroy$.complete()
  }

  loadMorePhotos(): void {
    this.loading = true;
    // set timeout to big value in order to make loader visible on scroll
    setTimeout(() => {
      this.imageService.getImages(this.getRandomInt()).pipe(takeUntil(this.destroy$)).subscribe((photos: Image[]) => {
        this.images = [...this.images, ...photos];
        this.loading = false;
      })
    }, 2000)
  }

  addToFavorites(image: Image): void {
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

  private onScroll(): void {
    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.body.offsetHeight;
    const isScrolledToBottom = scrollPosition >= pageHeight;
    if (isScrolledToBottom && !this.loading) {
      this.loadMorePhotos();
    }
  }

  private getRandomInt(): number {
    const min = Math.ceil(1);
    const max = Math.floor(30);
    return Math.floor(Math.random() * (max - min) + min);
  }
}
