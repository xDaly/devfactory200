import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersNavigatorComponent } from './users-navigator.component';

describe('UsersNavigatorComponent', () => {
  let component: UsersNavigatorComponent;
  let fixture: ComponentFixture<UsersNavigatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UsersNavigatorComponent]
    });
    fixture = TestBed.createComponent(UsersNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
