import { Author } from '../author/author.model';
import { Twimp } from './twimp.model';

describe('Twimp.Model', () => {
  it('should create an instance', () => {
    expect(new Twimp(1, '', new Author(1), '', '')).toBeTruthy();
  });
});
