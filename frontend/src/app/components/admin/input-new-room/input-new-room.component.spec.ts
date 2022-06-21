import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNewRoomComponent } from './input-new-room.component';

describe('InputNewRoomComponent', () => {
  let component: InputNewRoomComponent;
  let fixture: ComponentFixture<InputNewRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputNewRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputNewRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
