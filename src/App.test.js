import { add, total } from './App';

test('add', () => {
  const value = add(10, 3);

  expect(value).toBe(13);
});

test('total', () => {
  expect(total(5, 20)).toBe('$25');
});
