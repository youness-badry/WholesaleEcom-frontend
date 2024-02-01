import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPriceComponent } from './filter-price.component';

describe('FilterPriceComponent', () => {
  let component: FilterPriceComponent;
  let fixture: ComponentFixture<FilterPriceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterPriceComponent]
    });
    fixture = TestBed.createComponent(FilterPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
