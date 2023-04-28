import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { PhotosListComponent } from './photos-list.component';
import { ImagesService } from '../../services/images.service';

describe('PhotosListComponent', () => {
  let component: PhotosListComponent;
  let fixture: ComponentFixture<PhotosListComponent>;
  let imagesService: ImagesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotosListComponent],
      imports: [HttpClientTestingModule],
      providers: [ImagesService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosListComponent);
    component = fixture.componentInstance;
    imagesService = TestBed.inject(ImagesService);
    spyOn(imagesService, 'getImages').and.returnValue(of(['image1.jpg', 'image2.jpg']));
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should get images on init', () => {
      expect(imagesService.getImages).toHaveBeenCalledWith(1);
      expect(component.images$).toBeDefined();
    });
  })

  describe('addToFavorites', () => {
    it('should add image to favorites', () => {
      spyOn(localStorage, 'getItem').and.returnValue(null);
      spyOn(localStorage, 'setItem');
      component.addToFavorites('image1.jpg');
      expect(localStorage.setItem).toHaveBeenCalledWith('image1.jpg', 'image1.jpg');
    });

    it('should not add image to favorites if it already exists', () => {
      spyOn(localStorage, 'getItem').and.returnValue('image1.jpg');
      spyOn(localStorage, 'setItem');
      component.addToFavorites('image1.jpg');
      expect(localStorage.setItem).not.toHaveBeenCalled();
    });
  })
});