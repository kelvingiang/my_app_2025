import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AftercontentComponent } from './aftercontent.component';

describe('AftercontentComponent', () => {
  let component: AftercontentComponent;
  let fixture: ComponentFixture<AftercontentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AftercontentComponent]
    });
    fixture = TestBed.createComponent(AftercontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
