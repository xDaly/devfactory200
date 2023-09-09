import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthentificationNavigatorComponent } from './authentification-navigator.component';

describe('AuthentificationNavigatorComponent', () => {
  let component: AuthentificationNavigatorComponent;
  let fixture: ComponentFixture<AuthentificationNavigatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AuthentificationNavigatorComponent]
    });
    fixture = TestBed.createComponent(AuthentificationNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
