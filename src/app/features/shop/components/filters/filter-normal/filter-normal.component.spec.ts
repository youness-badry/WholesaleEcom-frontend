import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterNormalComponent } from './filter-normal.component';

describe('FilterNormalComponent', () => {
  let component: FilterNormalComponent;
  let fixture: ComponentFixture<FilterNormalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterNormalComponent]
    });
    fixture = TestBed.createComponent(FilterNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
