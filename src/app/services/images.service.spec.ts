import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ImagesService } from './images.service';

describe('ImagesService', () => {
  let service: ImagesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ImagesService]
    });
    service = TestBed.inject(ImagesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('getImages', () => {
    it('should retrieve images from the API', () => {
      // Arrange
      const mockImages = [
        { download_url: 'https://picsum.photos/id/1/200/300' },
        { download_url: 'https://picsum.photos/id/2/200/300' },
        { download_url: 'https://picsum.photos/id/3/200/300' }
      ];

      // Act
      service.getImages(1).subscribe(images => {

        // Assert
        expect(images.length).toBe(3);
        expect(images).toEqual(mockImages.map(image => image.download_url));
      });

      const request = httpMock.expectOne(`https://picsum.photos/v2/list?page=1&limit=30`);
      request.flush(mockImages);
    });

    it('should use GET to retrieve data', () => {
      // Arrange
      const mockImages = [
        { download_url: 'https://picsum.photos/id/1/200/300' },
        { download_url: 'https://picsum.photos/id/2/200/300' },
        { download_url: 'https://picsum.photos/id/3/200/300' }
      ];

      // Act
      service.getImages(1).subscribe();
      const req = httpMock.expectOne(`https://picsum.photos/v2/list?page=1&limit=30`);

      // Assert
      expect(req.request.method).toEqual('GET');
      req.flush(mockImages);
    });
  })
});
