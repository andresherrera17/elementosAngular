import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscardorComponent } from './buscardor.component';

describe('BuscardorComponent', () => {
  let component: BuscardorComponent;
  let fixture: ComponentFixture<BuscardorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscardorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscardorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
