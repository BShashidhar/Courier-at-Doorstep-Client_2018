import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetProviderComponent } from './get-provider.component';

describe('GetProviderComponent', () => {
  let component: GetProviderComponent;
  let fixture: ComponentFixture<GetProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
