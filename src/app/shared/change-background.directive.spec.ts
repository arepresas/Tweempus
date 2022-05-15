import { ChangeBackgroundDirective } from './change-background.directive';

describe('ChangeBackgroundDirective', () => {
  let elRefMock = {
    nativeElement: document.createElement('div'),
  };
  it('should create an instance', () => {
    const directive = new ChangeBackgroundDirective(elRefMock);
    expect(directive).toBeTruthy();
  });
});
