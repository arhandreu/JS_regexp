import modifyNumber from '../src/phonenumber';

test.each([
  ['8 (927) 000-00-00', '+79270000000'],
  ['+7 960 000 00 00', '+79600000000'],
  ['+86 000 000 0000', '+860000000000'],
])('Тест номера - %s', (number, expected) => {
  const result = modifyNumber(number);
  expect(result).toBe(expected);
});
