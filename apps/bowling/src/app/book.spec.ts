import { Book } from './book';

describe('Book', () => {
  it('should create an instance', () => {
    expect(new Book()).toBeTruthy();
  });
});

// book.spec.ts
test('Buy one book', () => {
  const books = new Book();
  let buying: number[] = [1, 2, 2];
    books.bnum(buying);
  
  expect(books.price).toBe(290);
});
