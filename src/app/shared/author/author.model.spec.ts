import { Author } from './author.model';

describe('Author.Model', () => {
  it('should create an instance', () => {
    expect(new Author(1,'','','')).toBeTruthy();
  });
});
