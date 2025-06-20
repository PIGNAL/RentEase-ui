import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalList } from './rental-list.component';

describe('RentalList', () => {
  let component: RentalList;
  let fixture: ComponentFixture<RentalList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentalList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentalList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
