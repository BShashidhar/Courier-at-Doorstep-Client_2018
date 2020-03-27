import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarEventsComponent } from './nav-bar-events.component';

describe('NavBarEventsComponent', () => {
  let component: NavBarEventsComponent;
  let fixture: ComponentFixture<NavBarEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
