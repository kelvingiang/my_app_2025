import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNgangComponent } from './menu-ngang.component';

describe('MenuNgangComponent', () => {
  let component: MenuNgangComponent;
  let fixture: ComponentFixture<MenuNgangComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuNgangComponent]
    });
    fixture = TestBed.createComponent(MenuNgangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
