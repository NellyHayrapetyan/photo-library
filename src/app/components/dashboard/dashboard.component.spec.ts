import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.components';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize isTabVisible to false', () => {
    expect(component.isTabVisible).toBe(false);
  });

  describe('changeTabVisibilityMode', () => {
    it('should set isTabVisible value from false to true when method is called', () => {
      component.isTabVisible = false;

      component.changeTabVisibilityMode();
      expect(component.isTabVisible).toBe(true);
    });

    it('should set isTabVisible value from true to false when method is called', () => {
      component.isTabVisible = true;

      component.changeTabVisibilityMode();
      expect(component.isTabVisible).toBe(false);
    });
  })
});