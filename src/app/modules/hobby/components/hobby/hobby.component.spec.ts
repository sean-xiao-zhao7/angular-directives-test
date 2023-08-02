import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { HobbyComponent } from './hobby.component';
import { hobbyReducer } from 'src/app/store/reducers/hobby.reducer';

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

  it('Should render a label with text Name', () => {
    const template = fixture.debugElement.nativeElement;
    expect(template.querySelector('label').textContent).toEqual('Name');
  });
});
