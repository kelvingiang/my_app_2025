import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestModifyComponent } from './guest-modify.component';

describe('GuestModifyComponent', () => {
  let component: GuestModifyComponent;
  let fixture: ComponentFixture<GuestModifyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuestModifyComponent]
    });
    fixture = TestBed.createComponent(GuestModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
