import { Book } from './book';

describe('Book', () => {
  it('should create an instance', () => {
    expect(new Book()).toBeTruthy();
  });
});

// book.spec.ts
test('Buy one book', () => {
  const books = new Book();
  
    //books.roll(0);
  
  expect(books.price).toBe(100);
});
