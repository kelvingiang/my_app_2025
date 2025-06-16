import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOnchangesComponent } from './child.component';

describe('ChildOnchangesComponent', () => {
  let component: ChildOnchangesComponent;
  let fixture: ComponentFixture<ChildOnchangesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildOnchangesComponent]
    });
    fixture = TestBed.createComponent(ChildOnchangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
