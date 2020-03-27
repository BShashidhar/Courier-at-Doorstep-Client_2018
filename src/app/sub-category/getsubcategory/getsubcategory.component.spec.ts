import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetsubcategoryComponent } from './getsubcategory.component';

describe('GetsubcategoryComponent', () => {
  let component: GetsubcategoryComponent;
  let fixture: ComponentFixture<GetsubcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetsubcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetsubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
