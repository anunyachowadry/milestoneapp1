import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalaxyrouteComponent } from './galaxyroute.component';

describe('GalaxyrouteComponent', () => {
  let component: GalaxyrouteComponent;
  let fixture: ComponentFixture<GalaxyrouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalaxyrouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalaxyrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
