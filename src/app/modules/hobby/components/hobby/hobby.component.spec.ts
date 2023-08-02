import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HobbyComponent } from './hobby.component';
import { hobbyReducer } from 'src/app/store/reducers/hobby.reducer';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('HobbyComponent', () => {
  let component: HobbyComponent;
  let fixture: ComponentFixture<HobbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot({ hobbyReducer: hobbyReducer }, {}),
        NoopAnimationsModule,
      ],
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
    fixture.detectChanges();
    expect(store).toBeTruthy();
  });
});
