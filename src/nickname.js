export default class Validator {
  static validateUsername(nickname) {
    let status = 'Успешная регистрация!!!';
    if (/[^-_a-z0-9]/i.test(nickname)) {
      status = 'Вы используете недопустимые символы!!!';
    } else if (/[0-9]{3}/.test(nickname)) {
      status = 'Имя не должно содержать подряд более трёх цифр!!!';
    } else if (/^[-_0-9]/.test(nickname) || /[-_0-9]$/.test(nickname)) {
      status = 'Имя не должно начинаться и заканчиваться цифрами, символами подчёркивания или тире!!!';
    }
    return status;
  }
}
