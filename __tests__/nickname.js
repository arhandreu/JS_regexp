import Validator from '../src/nickname';

test.each([
  ['$Andrew', 'Вы используете недопустимые символы!!!'],
  ['A000ndrew', 'Имя не должно содержать подряд более трёх цифр!!!'],
  ['0Andrew', 'Имя не должно начинаться и заканчиваться цифрами, символами подчёркивания или тире!!!'],
  ['Andrew', 'Успешная регистрация!!!'],
])('Тест ника - %s', (nickname, expected) => {
  const result = Validator.validateUsername(nickname);
  expect(result).toBe(expected);
});
