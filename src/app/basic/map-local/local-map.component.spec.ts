import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalMapComponent } from './local-map.component';

describe('LocalMapComponent', () => {
  let component: LocalMapComponent;
  let fixture: ComponentFixture<LocalMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocalMapComponent]
    });
    fixture = TestBed.createComponent(LocalMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
