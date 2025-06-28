import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarIncComponent } from './car-inc.component';

describe('CarIncComponent', () => {
  let component: CarIncComponent;
  let fixture: ComponentFixture<CarIncComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarIncComponent]
    });
    fixture = TestBed.createComponent(CarIncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
