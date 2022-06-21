import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputChangeNameComponent } from './input-change-name.component';

describe('InputChangeNameComponent', () => {
  let component: InputChangeNameComponent;
  let fixture: ComponentFixture<InputChangeNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputChangeNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputChangeNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
