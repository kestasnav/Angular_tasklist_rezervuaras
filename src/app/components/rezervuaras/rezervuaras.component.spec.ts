import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezervuarasComponent } from './rezervuaras.component';

describe('RezervuarasComponent', () => {
  let component: RezervuarasComponent;
  let fixture: ComponentFixture<RezervuarasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RezervuarasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RezervuarasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
