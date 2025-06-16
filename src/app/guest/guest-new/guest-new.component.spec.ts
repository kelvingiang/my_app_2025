import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestNewComponent } from './guest-new.component';

describe('GuestNewComponent', () => {
  let component: GuestNewComponent;
  let fixture: ComponentFixture<GuestNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuestNewComponent]
    });
    fixture = TestBed.createComponent(GuestNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
