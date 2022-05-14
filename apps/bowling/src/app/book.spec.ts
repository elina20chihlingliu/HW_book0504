// book.spec.ts
import { Book } from './book';

describe('Book', () => {
  it('should create an instance', () => {
    expect(new Book()).toBeTruthy();
  });
});

test('Buy no book', () => {
  const books = new Book();
  let buying: number[] = [];
  books.bnum(buying);
  expect(books.price).toBe(0);
});

test('Buy one book(ep 1)', () => {
  const books = new Book();
  let buying: number[] = [1];
  books.bnum(buying);
  expect(books.price).toBe(100);
});

test('Buy two books(ep 1, 2)', () => {
  const books = new Book();
  let buying: number[] = [1, 2];
    books.bnum(buying);
  
  expect(books.price).toBe(190);
});

test('Buy three books(ep 1, 1, 1)', () => {
  const books = new Book();
  let buying: number[] = [1, 1, 1];
  books.bnum(buying);
  expect(books.price).toBe(300);
});

test('Buy three books(ep 1, 2, 3)', () => {
  const books = new Book();
  let buying: number[] = [1, 2, 3];
  books.bnum(buying);
  expect(books.price).toBe(270);
});

test('Buy three books(ep 1, 2, 2)', () => {
  const books = new Book();
  let buying: number[] = [1, 2, 2];
  books.bnum(buying);
  expect(books.price).toBe(290);
});

test('Buy four books(ep 1, 2, 3, 5)', () => {
  const books = new Book();
  let buying: number[] = [1, 2, 3, 5];
  books.bnum(buying);
  expect(books.price).toBe(320);
});

test('Buy four books(ep 1, 1, 2, 2)', () => {
  const books = new Book();
  let buying: number[] = [1, 1, 2, 2];
  books.bnum(buying);
  expect(books.price).toBe(380);
});

test('Buy five books(ep 1, 2, 3, 4, 5)', () => {
  const books = new Book();
  let buying: number[] = [1, 2, 3, 4, 5];
  books.bnum(buying);
  expect(books.price).toBe(375);
});

test('Buy six books(ep 1, 1, 2, 3, 3, 4)', () => {
  const books = new Book();
  let buying: number[] = [1, 1, 2, 3, 3, 4];
  books.bnum(buying);
  expect(books.price).toBe(510);
});

test('Buy six books(ep 1, 2, 2, 3, 4, 5)', () => {
  const books = new Book();
  let buying: number[] = [1, 2, 2, 3, 4, 5];
  books.bnum(buying);
  expect(books.price).toBe(475);
});
