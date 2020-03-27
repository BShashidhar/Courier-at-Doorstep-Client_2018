import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSaveServiceComponent } from './new-save-service.component';

describe('NewSaveServiceComponent', () => {
  let component: NewSaveServiceComponent;
  let fixture: ComponentFixture<NewSaveServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSaveServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSaveServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
