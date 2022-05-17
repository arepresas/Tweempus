import { AuthGuardService } from './auth-guard.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TestBed } from '@angular/core/testing';

describe('AuthGuardService', () => {
  let service: AuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), HttpClientModule],
    });
    service = TestBed.inject(AuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
