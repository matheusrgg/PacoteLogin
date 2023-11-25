import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvpLibComponent } from './mvp-lib.component';

describe('MvpLibComponent', () => {
  let component: MvpLibComponent;
  let fixture: ComponentFixture<MvpLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MvpLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MvpLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
