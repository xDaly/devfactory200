import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDisplayComponent } from './users-display.component';

describe('UsersDisplayComponent', () => {
  let component: UsersDisplayComponent;
  let fixture: ComponentFixture<UsersDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UsersDisplayComponent]
    });
    fixture = TestBed.createComponent(UsersDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
