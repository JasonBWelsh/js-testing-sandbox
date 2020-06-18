import { add } from './add';

// unit test
test('add', () => {
  const value = add(10, 3);

  expect(value).toBe(13);
});
