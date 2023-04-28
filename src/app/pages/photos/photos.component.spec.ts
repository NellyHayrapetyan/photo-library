import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { PhotosComponent } from './photos.component';
import { ImagesService } from '../../services/images.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('PhotosComponent', () => {
  let component: PhotosComponent;
  let fixture: ComponentFixture<PhotosComponent>;
  let imagesService: ImagesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotosComponent],
      imports: [HttpClientTestingModule],
      providers: [ImagesService],
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
    spyOn(imagesService, 'getImages').and.returnValue(of(['image1.jpg', 'image2.jpg']));
    fixture.detectChanges();
  });

  it('should create the component', () => {
    // Assert
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should get images on init', () => {
      // Assert
      expect(imagesService.getImages).toHaveBeenCalledWith(1);
      expect(component.images$).toBeDefined();
    });
  })

  describe('addToFavorites', () => {
    it('should add image to favorites', () => {
      // Arrange
      spyOn(localStorage, 'getItem').and.returnValue(null);
      spyOn(localStorage, 'setItem');

      // Act
      component.addToFavorites('image1.jpg');

      // Assert
      expect(localStorage.setItem).toHaveBeenCalledWith('image1.jpg', 'image1.jpg');
    });

    it('should not add image to favorites if it already exists', () => {
      // Arrange
      spyOn(localStorage, 'getItem').and.returnValue('image1.jpg');
      spyOn(localStorage, 'setItem');

      // Act
      component.addToFavorites('image1.jpg');

      // Assert
      expect(localStorage.setItem).not.toHaveBeenCalled();
    });
  })
});