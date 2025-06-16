import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnchangesComponent } from './onchanges.component';

describe('OnchangesComponent', () => {
  let component: OnchangesComponent;
  let fixture: ComponentFixture<OnchangesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnchangesComponent]
    });
    fixture = TestBed.createComponent(OnchangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
