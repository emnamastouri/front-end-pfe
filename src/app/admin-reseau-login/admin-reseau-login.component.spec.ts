import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReseauLoginComponent } from './admin-reseau-login.component';

describe('AdminReseauLoginComponent', () => {
  let component: AdminReseauLoginComponent;
  let fixture: ComponentFixture<AdminReseauLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminReseauLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminReseauLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
