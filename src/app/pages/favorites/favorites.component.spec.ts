import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesComponent } from './favorites.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('FavoritesComponent', () => {
  let component: FavoritesComponent;
  let fixture: ComponentFixture<FavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoritesComponent],
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
      const localStorageSpy = spyOn(Object, 'keys').withArgs(localStorage).and.returnValue(['image1', 'image2']);

      // Ac
      component.ngOnInit();

      // Assert
      expect(localStorageSpy).toHaveBeenCalled();
      expect(component.favoriteImages.length).toBe(2);
      expect(component.favoriteImages[0]).toBe('image1');
      expect(component.favoriteImages[1]).toBe('image2');
    });
  })
});