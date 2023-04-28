import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { PhotosComponent } from './photos.component';
import { ImagesService } from '../../services/images.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

describe('PhotosComponent', () => {
  let component: PhotosComponent;
  let fixture: ComponentFixture<PhotosComponent>;
  let imagesService: ImagesService;
  let snackBar: MatSnackBar;
  const mockImages = [
    { url: 'https://picsum.photos/id/1/200/300', id: '1' },
    { url: 'https://picsum.photos/id/2/200/300', id: '2' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotosComponent],
      imports: [HttpClientTestingModule, MatSnackBarModule],
      providers: [ImagesService, MatSnackBar],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosComponent);
    component = fixture.componentInstance;
    imagesService = TestBed.inject(ImagesService);
    snackBar = TestBed.inject(MatSnackBar);
    spyOn(imagesService, 'getImages').and.returnValue(of(mockImages));
    spyOn(snackBar, 'open').and.stub();
    fixture.detectChanges();
  });

  afterEach(() => {
    component.destroy$.next(true);
    component.destroy$.complete();
  });

  it('should create the component', () => {
    // Assert
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call loadMorePhotos on init', () => {
      // Arrange
      const loadPhotosSpy = spyOn(component, 'loadMorePhotos');

      // Act
      component.ngOnInit();

      // Assert
      expect(loadPhotosSpy).toHaveBeenCalled();
    });
  })

  describe('loadMoreImages', () => {
    it('should set loading to true and then false after 2 seconds', done => {
      // Act
      component.ngOnInit();

      // Assert
      expect(component.loading).toBe(true);

      setTimeout(() => {
        expect(component.loading).toBe(false);
        expect(imagesService.getImages).toHaveBeenCalled();
        done();
      }, 2000);
    });
  })

  describe('addToFavorites', () => {
    it('should add image to favorites', () => {
      // Arrange
      spyOn(localStorage, 'getItem').and.returnValue(null);
      spyOn(localStorage, 'setItem');

      // Act
      component.addToFavorites(mockImages[0]);

      // Assert
      expect(localStorage.setItem).toHaveBeenCalledWith(mockImages[0].id, mockImages[0].url);
    });

    it('should not add image to favorites if it already exists show snackbar', () => {
      // Arrange
      spyOn(localStorage, 'getItem').and.returnValue(mockImages[0].url);
      spyOn(localStorage, 'setItem');

      // Act
      component.addToFavorites(mockImages[0]);

      // Assert
      expect(localStorage.setItem).not.toHaveBeenCalled();
      expect(snackBar.open).toHaveBeenCalledWith(
        'Image already exists in favorites',
        'Close',
        {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'top',
        }
      );
    });
  })
});
