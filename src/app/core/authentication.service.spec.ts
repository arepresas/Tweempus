import { AuthenticationService } from './authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TestBed } from '@angular/core/testing';

describe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), HttpClientModule],
    });
    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
