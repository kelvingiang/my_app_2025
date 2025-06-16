import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VongdoiComponent } from './vongdoi.component';

describe('VongdoiComponent', () => {
  let component: VongdoiComponent;
  let fixture: ComponentFixture<VongdoiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VongdoiComponent]
    });
    fixture = TestBed.createComponent(VongdoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
