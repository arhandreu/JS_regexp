export default function modifyNumber(number) {
  const modNumber = number.replace(/^8 /, '7').replace(/[^0-9]/g, '');
  return `+${modNumber}`;
}
