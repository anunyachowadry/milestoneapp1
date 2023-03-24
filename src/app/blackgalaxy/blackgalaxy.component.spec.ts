import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackgalaxyComponent } from './blackgalaxy.component';

describe('BlackgalaxyComponent', () => {
  let component: BlackgalaxyComponent;
  let fixture: ComponentFixture<BlackgalaxyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlackgalaxyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlackgalaxyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
