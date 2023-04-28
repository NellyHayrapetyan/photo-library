import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoComponent } from './photo.component';

describe('PhotoComponent', () => {
  let component: PhotoComponent;
  let fixture: ComponentFixture<PhotoComponent>;
  let mockActivatedRoute: any;
  let mockRouter: any;

  beforeEach(async () => {
    mockActivatedRoute = {
      snapshot: {
        params: { id: '1' },
      },
    };

    mockRouter = {
      navigate: jasmine.createSpy('navigate'),
    };

    await TestBed.configureTestingModule({
      declarations: [PhotoComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Router, useValue: mockRouter },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // Assert
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should set the image property with data from the history', () => {
      // Arrange
      history.pushState({ data: 'https://picsum.photos/id/1/200/300' }, '');

      // Act
      component.ngOnInit();

      // Assert
      expect(component.image).toBe('https://picsum.photos/id/1/200/300');
    });
  })

  describe('removeImage', () => {
    it('should remove the image from localStorage and navigate to the favorites page', () => {
      // Arrange
      spyOn(localStorage, 'removeItem');

      // Act
      component.removeImage();

      // Assert
      expect(localStorage.removeItem).toHaveBeenCalledWith('1');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['../..', 'favorites']);
    });
  })
});
