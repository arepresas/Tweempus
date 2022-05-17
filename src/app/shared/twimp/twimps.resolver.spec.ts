import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { TwimpsResolver } from './twimps.resolver';

describe('TwimpsResolver', () => {
  let resolver: TwimpsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    }).compileComponents();
    resolver = TestBed.inject(TwimpsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
