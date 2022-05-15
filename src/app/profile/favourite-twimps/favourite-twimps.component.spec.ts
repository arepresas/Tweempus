import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteTwimpsComponent } from './favourite-twimps.component';

describe('FavouriteTwimpsComponent', () => {
  let component: FavouriteTwimpsComponent;
  let fixture: ComponentFixture<FavouriteTwimpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouriteTwimpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteTwimpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
