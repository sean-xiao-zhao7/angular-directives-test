import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbyComponent } from './hobby.component';
import { Store } from '@ngrx/store';

describe('HobbyComponent', () => {
  let component: HobbyComponent;
  let fixture: ComponentFixture<HobbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HobbyComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have an store instance', () => {
    let store = fixture.debugElement.injector.get(Store);
    expect(store).toBeTruthy();
  });
});
