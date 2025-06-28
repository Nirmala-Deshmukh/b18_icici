import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeIncComponent } from './bike-inc.component';

describe('BikeIncComponent', () => {
  let component: BikeIncComponent;
  let fixture: ComponentFixture<BikeIncComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BikeIncComponent]
    });
    fixture = TestBed.createComponent(BikeIncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
