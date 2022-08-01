import { randomId } from '../index';

test('It should generate random ids with desired length', () => {
  expect(randomId(10)).toHaveLength(10);
  expect(randomId(5)).toHaveLength(5);
});
