import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarFormComponent } from './car-form.component';

describe('Car', () => {
  let component: CarFormComponent;
  let fixture: ComponentFixture<CarFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
