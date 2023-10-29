import { TestBed } from '@angular/core/testing';

import { MenuDetailsService } from './menu.service';

describe('MenuDetailsService', () => {
  let service: MenuDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
