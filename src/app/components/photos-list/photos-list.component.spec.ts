import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PhotosListComponent } from './photos-list.component';

describe('PhotosListComponent', () => {
  let component: PhotosListComponent;
  let fixture: ComponentFixture<PhotosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotosListComponent],
      imports: [HttpClientTestingModule],
      providers: []
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    // Assert
    expect(component).toBeTruthy();
  });

  it('should emit image when selectImage is called', () => {
    // Arrange
    const image = 'https://picsum.photos/id/1/200/300';
    const spy = spyOn(component.onImageSelected, 'emit');

    // Act
    component.selectImage(image);

    // Assert
    expect(spy).toHaveBeenCalledWith(image);
  });
});