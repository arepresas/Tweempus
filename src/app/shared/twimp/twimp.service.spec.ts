import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { TwimpService } from './twimp.service';

describe('TwimpService', () => {
  let service: TwimpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    }).compileComponents();
    service = TestBed.inject(TwimpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
