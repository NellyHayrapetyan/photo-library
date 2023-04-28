import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesComponent } from './favorites.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

describe('FavoritesComponent', () => {
  let component: FavoritesComponent;
  let fixture: ComponentFixture<FavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoritesComponent],
      providers: [{
        provide: ActivatedRoute,
        useValue: {
          snapshot: {
            data: 'https://picsum.photos/id/1/200/300',
          },
        },
      }],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // Assert
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should set favoriteImages from localStorage', () => {
      // Arrange
      localStorage.setItem('1', 'https://picsum.photos/id/1/200/300');
      localStorage.setItem('2', 'https://picsum.photos/id/2/200/300');

      // Act
      component.ngOnInit();
      fixture.detectChanges();

      // Assert
      expect(component.favoriteImages.length).toBe(2);
      expect(component.favoriteImages[0].id).toBe('1');
      expect(component.favoriteImages[0].url).toBe('https://picsum.photos/id/1/200/300');
      expect(component.favoriteImages[1].id).toBe('2');
      expect(component.favoriteImages[1].url).toBe('https://picsum.photos/id/2/200/300');
    });
  })
});