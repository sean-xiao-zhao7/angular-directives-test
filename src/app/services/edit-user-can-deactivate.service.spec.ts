import { TestBed } from '@angular/core/testing';

import { EditUserCanDeactivateService } from './edit-user-can-deactivate.service';

describe('EditUserCanDeactivateService', () => {
  let service: EditUserCanDeactivateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditUserCanDeactivateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
